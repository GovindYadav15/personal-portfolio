import os
import sys
import cv2
import numpy as np
from PIL import Image
from rembg import remove, new_session
import imageio_ffmpeg

sys.stdout.reconfigure(line_buffering=True)

INPUT_VIDEO = "public/details/3d-video-orig.mp4"
FRAMES_NOBG_DIR = "scratch/frames_nobg"
FRAMES_DARK_DIR = "scratch/frames_dark"
OUTPUT_WEBM = "public/details/3d-video.webm"
OUTPUT_MP4 = "public/details/3d-video.mp4"
TARGET_FPS = 18

os.makedirs(FRAMES_NOBG_DIR, exist_ok=True)
os.makedirs(FRAMES_DARK_DIR, exist_ok=True)

print("Initializing u2net_human_seg session...", flush=True)
session = new_session("u2net_human_seg")

cap = cv2.VideoCapture(INPUT_VIDEO)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total frames to process: {total_frames}", flush=True)

frame_idx = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Blank out QR code and promotional text
    frame[:250, 740:] = [26, 26, 26]
    frame[:120, :] = [26, 26, 26]

    # Segment using u2net_human_seg
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(rgb)
    out_pil = remove(pil_img, session=session)
    rgba = np.array(out_pil)

    # Clean alpha channel
    alpha = rgba[:, :, 3].copy()

    # Clear QR zone & text zone completely
    alpha[:250, 740:] = 0
    alpha[:120, :] = 0

    # Smoothly fade out below y = 880 to 926, and 0 below 926 (bust cutoff)
    for y in range(880, 926):
        factor = (926 - y) / 46.0
        alpha[y, :] = (alpha[y, :].astype(float) * factor).astype(np.uint8)
    alpha[926:, :] = 0

    # Enhance dark coat details (shadow lift so coat textures are visible on dark backgrounds)
    rgb_crop = rgba[:, :, :3].copy()
    hsv = cv2.cvtColor(rgb_crop, cv2.COLOR_RGB2HSV).astype(float)
    v = hsv[:, :, 2]
    # Gentle shadow lift for darker regions (v < 100)
    v_boost = 18.0 * np.maximum(0.0, 1.0 - (v / 100.0))
    hsv[:, :, 2] = np.clip(v + v_boost, 0, 255)
    enhanced_rgb = cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2RGB)

    # Reconstruct RGBA
    enhanced_rgba = np.dstack([enhanced_rgb, alpha])

    # Save transparent frame (RGBA PNG)
    nobg_path = os.path.join(FRAMES_NOBG_DIR, f"frame_{frame_idx:04d}.png")
    Image.fromarray(enhanced_rgba).save(nobg_path)

    # Save dark background frame (matched to #0a091a -> BGR [26, 9, 10])
    a_norm = alpha[:, :, None] / 255.0
    dark_bg = np.full((1080, 1080, 3), [10, 9, 26], dtype=np.uint8) # RGB
    dark_blend = (enhanced_rgb * a_norm + dark_bg * (1.0 - a_norm)).astype(np.uint8)
    dark_path = os.path.join(FRAMES_DARK_DIR, f"frame_{frame_idx:04d}.png")
    Image.fromarray(dark_blend).save(dark_path)

    frame_idx += 1
    if frame_idx % 10 == 0 or frame_idx == total_frames:
        print(f"Processed frame {frame_idx}/{total_frames}", flush=True)

cap.release()
print("All frames processed! Compiling videos with ffmpeg...", flush=True)

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()

# 1. Compile transparent WebM (VP9 yuva420p)
print("Encoding WebM (transparent alpha)...", flush=True)
cmd_webm = (
    f'"{ffmpeg_exe}" -y -framerate {TARGET_FPS} -i "{FRAMES_NOBG_DIR}/frame_%04d.png" '
    f'-c:v libvpx-vp9 -pix_fmt yuva420p -b:v 2500k -crf 20 -auto-alt-ref 0 "{OUTPUT_WEBM}"'
)
res = os.system(cmd_webm)
if res != 0:
    print(f"WebM encoding failed with code {res}")
else:
    print(f"Saved transparent WebM to {OUTPUT_WEBM}", flush=True)

# 2. Compile dark MP4 (H.264 yuv420p)
print("Encoding MP4 (dark background fallback)...", flush=True)
cmd_mp4 = (
    f'"{ffmpeg_exe}" -y -framerate {TARGET_FPS} -i "{FRAMES_DARK_DIR}/frame_%04d.png" '
    f'-c:v libx264 -pix_fmt yuv420p -b:v 2500k -crf 18 -movflags +faststart "{OUTPUT_MP4}"'
)
res = os.system(cmd_mp4)
if res != 0:
    print(f"MP4 encoding failed with code {res}")
else:
    print(f"Saved dark MP4 to {OUTPUT_MP4}", flush=True)

print("Video processing completed successfully!", flush=True)
