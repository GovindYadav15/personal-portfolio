import os
import cv2
import numpy as np
from PIL import Image
from rembg import remove, new_session
import imageio_ffmpeg
import subprocess

def main():
    video_path = 'public/details/3d-video.mp4'
    nobg_dir = 'scratch/frames_nobg'
    dark_dir = 'scratch/frames_dark'
    os.makedirs(nobg_dir, exist_ok=True)
    os.makedirs(dark_dir, exist_ok=True)

    print('Initializing u2netp session...')
    sess = new_session('u2netp')

    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f'Total frames to process: {total_frames}')

    # Website background color: #0a091a -> RGB(10, 9, 26)
    bg_rgb = (10, 9, 26)

    for i in range(total_frames):
        ret, frame = cap.read()
        if not ret:
            break

        # Frame in BGR
        h, w = frame.shape[:2]

        # 1. Clean QR code and watermark
        # QR code is in top right
        frame[:250, 740:] = [26, 26, 26]
        # Tripo text in top center
        frame[:120, :] = [26, 26, 26]

        # Convert to RGB for PIL
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(rgb)

        # 2. Remove background to get RGBA
        nobg = remove(pil_img, session=sess)
        nobg.save(f'{nobg_dir}/frame_{i:04d}.png')

        # 3. Create dark-background version for MP4 fallback
        nobg_np = np.array(nobg) # H, W, 4 (RGBA)
        alpha = nobg_np[:, :, 3:4] / 255.0
        foreground = nobg_np[:, :, :3]

        dark_canvas = np.zeros((h, w, 3), dtype=np.float32)
        dark_canvas[:, :] = bg_rgb

        blended = (foreground * alpha + dark_canvas * (1.0 - alpha)).astype(np.uint8)
        # Convert RGB to BGR for cv2
        blended_bgr = cv2.cvtColor(blended, cv2.COLOR_RGB2BGR)
        cv2.imwrite(f'{dark_dir}/frame_{i:04d}.png', blended_bgr)

        if (i + 1) % 20 == 0 or i == total_frames - 1:
            print(f'Processed frame {i + 1}/{total_frames}')

    cap.release()
    print('All frames processed! Compiling videos with ffmpeg...')

    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

    # 1. Transparent WebM (VP9 + yuva420p) at 18 fps (slowed down from 30 fps)
    webm_out = 'public/details/3d-video.webm'
    cmd_webm = [
        ffmpeg, '-y',
        '-framerate', '18',
        '-i', f'{nobg_dir}/frame_%04d.png',
        '-c:v', 'libvpx-vp9',
        '-pix_fmt', 'yuva420p',
        '-b:v', '2M',
        '-auto-alt-ref', '0',
        webm_out
    ]
    print('Encoding WebM...')
    subprocess.run(cmd_webm, check=True)
    print(f'Saved transparent WebM to {webm_out}')

    # 2. Dark-bg MP4 (H.264) at 18 fps matching #0a091a website field
    mp4_out = 'public/details/3d-video.mp4'
    # Backup original first
    if not os.path.exists('public/details/3d-video-orig.mp4'):
        os.rename('public/details/3d-video.mp4', 'public/details/3d-video-orig.mp4')
    cmd_mp4 = [
        ffmpeg, '-y',
        '-framerate', '18',
        '-i', f'{dark_dir}/frame_%04d.png',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-b:v', '2.5M',
        '-movflags', '+faststart',
        mp4_out
    ]
    print('Encoding MP4...')
    subprocess.run(cmd_mp4, check=True)
    print(f'Saved dark MP4 to {mp4_out}')
    print('All done successfully!')

if __name__ == '__main__':
    main()
