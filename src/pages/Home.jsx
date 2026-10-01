import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import {
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiJenkins,
  SiNodedotjs,
  SiMongodb,
  SiNginx,
  SiGithubactions,
  SiTerraform,
  SiLinux,
} from "react-icons/si";

function OrbitingIcon({ orbitId, dur, begin = "0s", Icon, color, name }) {
  return (
    <g className="cursor-pointer pointer-events-auto">
      <animateMotion dur={dur} begin={begin} repeatCount="indefinite">
        <mpath href={`#${orbitId}`} />
      </animateMotion>
      <title>{name}</title>
      {/* Outer subtle halo ring */}
      <circle r="16.5" fill="none" stroke="var(--line-strong)" strokeWidth="0.8" opacity="0.5" />
      {/* Badge container with theme-aware background */}
      <circle
        r="14"
        fill="var(--field-raised)"
        stroke="var(--line-strong)"
        strokeWidth="1.2"
      />
      {/* Subtle brand color glow inside badge */}
      <circle r="13" fill={color} opacity="0.14" />
      {/* Centered tech icon */}
      <g transform="translate(-8, -8)">
        <Icon size={16} color={color} aria-hidden="true" />
      </g>
      {/* Trailing micro orbital spark */}
      <circle cx="11" cy="-9" r="1.8" fill="var(--signal)" opacity="0.85" filter="url(#electronGlow)" />
    </g>
  );
}

export default function Home() {
  const [showCv, setShowCv] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const cvDialog = useRef(null);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65;
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (!showCv) return undefined;
    cvDialog.current?.showModal();
    return undefined;
  }, [showCv]);

  const technologies = [
    "Node.js",
    "Express",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Terraform",
  ];

  return (
    <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto min-h-0 md:min-h-[720px] grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(360px,1.08fr)] lg:grid-cols-[1fr_1.15fr] gap-8 md:gap-10 lg:gap-16 items-center py-14 sm:py-20 md:py-24">
      <div className="flex flex-col">
        <h1 className="m-0 font-serif font-medium text-[clamp(3.4rem,8vw,7.4rem)] leading-[0.88] tracking-[-0.065em] text-ink">
          Govind <span className="block text-signal">Kumar Yadav</span>
        </h1>
        <p className="mt-7 mb-3.5 text-ink text-[clamp(1.15rem,2vw,1.45rem)] font-semibold tracking-[-0.02em]">
          Backend &amp; DevOps Engineer
        </p>
        <p className="max-w-[58ch] mb-7 text-ink-soft text-base leading-[1.8]">
          Backend Developer and DevOps enthusiast with strong experience in Node.js, Express, REST APIs, CI/CD pipelines, Cloud Infrastructure, and containerized deployments. AWS Certified Cloud Practitioner with hands-on experience in automation, IaC, monitoring, and scalable backend systems.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="min-h-[48px] inline-flex justify-center items-center gap-2.5 px-4 sm:px-5 border border-signal bg-signal text-[#0a091a] font-bold text-sm cursor-pointer transition-all hover:bg-signal-deep hover:border-signal-deep hover:text-[#0a091a] shadow-sm"
            href="#projects"
          >
            Explore projects <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <button
            className="min-h-[48px] inline-flex justify-center items-center gap-2.5 px-4 sm:px-5 border border-line-strong bg-transparent text-ink text-sm font-medium cursor-pointer transition-all hover:border-signal hover:text-signal"
            type="button"
            onClick={() => setShowCv(true)}
          >
            View CV <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          <a
            className="min-h-[48px] inline-flex justify-center items-center gap-2.5 px-4 sm:px-5 border border-line-strong bg-transparent text-ink text-sm font-medium cursor-pointer transition-all hover:border-signal hover:text-signal"
            href="mailto:govind803556@gmail.com"
          >
            Get in touch
          </a>
        </div>
        <ul className="flex flex-wrap items-center gap-0 mt-8 p-0 list-none text-ink-muted text-xs tracking-wider uppercase font-mono" aria-label="Selected technologies">
          {technologies.map((tech, idx) => (
            <li key={tech} className="inline-flex items-center">
              {idx > 0 && <span className="w-1 h-1 mx-3 rounded-full bg-signal" aria-hidden="true" />}
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="relative w-[min(94%,440px)] md:w-[min(100%,530px)] lg:w-[570px] xl:w-[610px] aspect-square justify-self-center md:justify-self-end flex items-center justify-center order-first md:order-last group"
        aria-label="Portrait of Govind Kumar Yadav with animated atomic orbital circles"
      >
        {/* Ambient energy aura centered behind portrait */}
        <div
          className={`absolute inset-[8%] rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 ${
            isHovered
              ? "scale-125 opacity-90 blur-2xl bg-[radial-gradient(circle,rgba(114,239,221,0.38)_0%,rgba(105,48,195,0.35)_50%,transparent_75%)]"
              : "opacity-50 bg-[radial-gradient(circle,rgba(114,239,221,0.22)_0%,rgba(105,48,195,0.2)_50%,transparent_75%)]"
          }`}
          style={{ animationDuration: "5s" }}
          aria-hidden="true"
        />

        {/* Dynamic Atomic Orbital Circles & Traveling DevOps/Backend Tool Badges (SVG Vector) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[1] select-none"
          viewBox="0 0 560 560"
          aria-hidden="true"
        >
          <defs>
            <filter id="electronGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbit 1: Outer concentric circle */}
          <path
            id="orbit-outer"
            d="M 18,280 a 262,262 0 1,0 524,0 a 262,262 0 1,0 -524,0"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1"
            opacity="0.85"
          />
          <OrbitingIcon
            orbitId="orbit-outer"
            dur="28s"
            begin="0s"
            Icon={SiDocker}
            color="#2496ED"
            name="Docker"
          />
          <OrbitingIcon
            orbitId="orbit-outer"
            dur="28s"
            begin="-14s"
            Icon={SiKubernetes}
            color="#326CE5"
            name="Kubernetes"
          />

          {/* Orbit 2: Atomic Ellipse A tilted at -36deg */}
          <path
            id="orbit-atom-a"
            d="M 77.75,426.95 A 250,112 -36 1,0 482.25,133.05 A 250,112 -36 1,0 77.75,426.95"
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth="1.2"
            opacity="0.85"
          />
          <OrbitingIcon
            orbitId="orbit-atom-a"
            dur="22s"
            begin="0s"
            Icon={SiAmazonwebservices}
            color="#FF9900"
            name="AWS"
          />
          <OrbitingIcon
            orbitId="orbit-atom-a"
            dur="22s"
            begin="-11s"
            Icon={SiJenkins}
            color="#D24939"
            name="Jenkins"
          />

          {/* Orbit 3: Atomic Ellipse B tilted at +36deg */}
          <path
            id="orbit-atom-b"
            d="M 77.75,133.05 A 250,112 36 1,0 482.25,426.95 A 250,112 36 1,0 77.75,133.05"
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            opacity="0.85"
          />
          <OrbitingIcon
            orbitId="orbit-atom-b"
            dur="24s"
            begin="0s"
            Icon={SiNodedotjs}
            color="#5FA04E"
            name="Node.js"
          />
          <OrbitingIcon
            orbitId="orbit-atom-b"
            dur="24s"
            begin="-12s"
            Icon={SiMongodb}
            color="#47A248"
            name="MongoDB"
          />

          {/* Orbit 4: Atomic Ellipse C tilted at 90deg (vertical) */}
          <path
            id="orbit-atom-c"
            d="M 280.00,50.00 A 230,96 90 1,0 280.00,510.00 A 230,96 90 1,0 280.00,50.00"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1"
            opacity="0.75"
          />
          <OrbitingIcon
            orbitId="orbit-atom-c"
            dur="26s"
            begin="0s"
            Icon={SiGithubactions}
            color="#2088FF"
            name="GitHub Actions"
          />
          <OrbitingIcon
            orbitId="orbit-atom-c"
            dur="26s"
            begin="-13s"
            Icon={SiTerraform}
            color="#844FBA"
            name="Terraform"
          />

          {/* Orbit 5: Inner delicate dashed circular track */}
          <path
            id="orbit-atom-inner"
            d="M 108,280 a 172,172 0 1,0 344,0 a 172,172 0 1,0 -344,0"
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.7"
          />
          <OrbitingIcon
            orbitId="orbit-atom-inner"
            dur="18s"
            begin="0s"
            Icon={SiNginx}
            color="#009639"
            name="Nginx"
          />
          <OrbitingIcon
            orbitId="orbit-atom-inner"
            dur="18s"
            begin="-9s"
            Icon={SiLinux}
            color="#E95420"
            name="Linux"
          />
        </svg>

        {/* Interactive Portrait & 3D Video Holo Container */}
        <div
          className="relative z-[2] w-[105%] h-[128%] -mt-[20%] flex items-end justify-center cursor-pointer pointer-events-auto select-none [mask-image:linear-gradient(to_bottom,#000_65%,rgba(0,0,0,0.3)_86%,transparent_98%)] transition-transform duration-500 ease-out hover:scale-[1.03]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          title="Hover to view 3D interactive avatar"
        >
          {/* Static Portrait Image (Base Layer) */}
          <img
            className={`w-full h-full object-contain object-bottom scale-110 origin-bottom mix-blend-multiply transition-opacity duration-500 ${
              isHovered && videoLoaded ? "opacity-0" : "opacity-100"
            }`}
            src="/details/govind_yadav.png"
            alt="Govind Kumar Yadav"
            fetchPriority="high"
          />

          {/* 3D Animated Video Layer (Transparent WebM with MP4 fallback) */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-contain object-bottom scale-[1.48] -translate-y-[2.8%] origin-bottom transition-all duration-500 pointer-events-none drop-shadow-[0_0_16px_rgba(114,239,221,0.22)] drop-shadow-[0_4px_24px_rgba(105,48,195,0.25)] ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.playbackRate = 0.65;
              }
            }}
          >
            <source src="/details/3d-video.webm" type="video/webm" />
            <source src="/details/3d-video.mp4" type="video/mp4" />
          </video>

          {/* Holographic Cyber Laser Scanline sweep on hover */}
          {isHovered && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-signal to-transparent pointer-events-none z-30 shadow-[0_0_15px_#72efdd] animate-holo-scan" />
          )}

          {/* Corner Cyber HUD Reticles on Hover */}
          <div
            className={`absolute inset-[10%] md:inset-[12%] pointer-events-none transition-opacity duration-300 z-20 ${
              isHovered ? "opacity-85" : "opacity-0"
            }`}
          >
            {/* Top Left */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-signal shadow-[0_0_8px_#72efdd]" />
            {/* Top Right */}
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-signal shadow-[0_0_8px_#72efdd]" />
            {/* Bottom Left */}
            <span className="absolute bottom-6 left-0 w-4 h-4 border-b-2 border-l-2 border-signal shadow-[0_0_8px_#72efdd]" />
            {/* Bottom Right */}
            <span className="absolute bottom-6 right-0 w-4 h-4 border-b-2 border-r-2 border-signal shadow-[0_0_8px_#72efdd]" />
          </div>
        </div>

        {/* Glassmorphic role caption tag with 3D Holo Status */}
        <div className="absolute right-[0%] md:-right-[2%] bottom-[8%] md:bottom-[10%] z-20 flex flex-col items-end gap-1.5 pointer-events-none select-none">
          <span
            className={`px-3.5 py-1.5 bg-field-raised/90 backdrop-blur-md border rounded font-mono text-[11px] font-semibold tracking-widest uppercase shadow-lg transition-all duration-300 flex items-center gap-2 ${
              isHovered
                ? "border-signal text-signal shadow-[0_0_20px_rgba(114,239,221,0.35)] bg-[#120e2e]/95"
                : "border-line-strong text-ink-soft"
            }`}
          >
            {isHovered ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
                </span>
                <span>3D Holo Active</span>
                <span className="flex items-end gap-0.5 h-3 ml-0.5">
                  <span className="w-0.5 bg-signal animate-pulse h-full" />
                  <span className="w-0.5 bg-signal animate-pulse h-2/3" style={{ animationDelay: "150ms" }} />
                  <span className="w-0.5 bg-signal animate-pulse h-4/5" style={{ animationDelay: "300ms" }} />
                </span>
              </>
            ) : (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-signal/60" />
                <span>Backend · DevOps</span>
              </>
            )}
          </span>

          {/* Interactive Hint Pill */}
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 flex items-center gap-1 backdrop-blur-sm ${
              isHovered
                ? "bg-signal/20 text-signal border border-signal/40 opacity-100 shadow-[0_0_10px_rgba(114,239,221,0.2)]"
                : "bg-field-raised/60 text-ink-muted border border-line opacity-75"
            }`}
          >
            <Sparkles size={11} className={isHovered ? "text-signal animate-spin" : "text-ink-muted"} />
            <span>{isHovered ? "Rendering 3D Motion" : "Hover for 3D View"}</span>
          </span>
        </div>
      </div>

      {showCv && (
        <dialog
          className="fixed z-[100] inset-0 m-auto w-[min(calc(100%-32px),1120px)] max-h-[92vh] p-0 overflow-hidden border border-line-strong bg-field text-ink shadow-2xl backdrop:bg-black/85"
          ref={cvDialog}
          aria-labelledby="cv-title"
          onClose={() => setShowCv(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) cvDialog.current?.close();
          }}
        >
          <section className="w-full max-h-[92vh] flex flex-col overflow-hidden bg-field">
            <header className="flex justify-between items-center gap-5 px-5 py-3.5 border-b border-line">
              <h2 id="cv-title" className="m-0 font-serif font-medium text-base leading-tight text-ink">Govind Kumar Yadav · CV</h2>
              <button
                className="px-3 py-1.5 border border-line-strong bg-transparent text-ink text-xs font-mono cursor-pointer hover:border-signal hover:text-signal transition-colors"
                type="button"
                autoFocus
                onClick={() => cvDialog.current?.close()}
              >
                Close
              </button>
            </header>
            <iframe className="w-full min-h-[75vh] border-0 bg-white" src="/details/Govind_Kr_Yadav_CV.pdf" title="Govind Kumar Yadav CV" />
          </section>
        </dialog>
      )}
    </div>
  );
}
