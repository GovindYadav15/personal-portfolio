import { useState, useEffect, useRef, useCallback } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  SiKubernetes,
} from "react-icons/si";
import {
  Coffee,
  Radio,
  Server,
  Sparkles,
} from "lucide-react";

export default function DevOpsLoader({ onFinish }) {
  const [isDone, setIsDone] = useState(false);
  const isFinishedRef = useRef(false);

  // Complete helper wrapped in useCallback
  const handleComplete = useCallback(() => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    setIsDone(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 320);
  }, [onFinish]);

  // Keyboard shortcut: Escape to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleComplete]);

  // Snappy loader display duration (~1.0s)
  useEffect(() => {
    const timer = setTimeout(handleComplete, 950);
    return () => clearTimeout(timer);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <Motion.div
          key="devops-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(4px)",
            transition: { duration: 0.32, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between items-center bg-[#0a091a] text-[#f3f6fc] overflow-hidden select-none p-4 sm:p-6 md:p-8"
        >
          {/* Subtle Ambient Cyber Mesh / Starfield */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(114,239,221,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(105,48,195,0.16),transparent_55%)]" />
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage: `radial-gradient(rgba(114, 239, 221, 0.4) 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          {/* Top Bar: Brand, Status Badge & Quick Skip */}
          <header className="w-full max-w-4xl flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#120e2e] border border-[rgba(114,239,221,0.3)] shadow-[0_0_15px_rgba(114,239,221,0.2)]">
                <Radio className="w-4 h-4 text-[#72efdd] animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0a091a] animate-ping" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#72efdd] font-semibold block">
                  Govind Yadav | DevOps Pipeline
                </span>
                <span className="text-[11px] text-[#788eb5] font-mono">
                  cluster: portfolio-prod-us-east • node-01
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleComplete}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-[#b2c3df] hover:text-[#72efdd] bg-[#120e2e]/70 hover:bg-[#1b1642] border border-[rgba(94,96,206,0.3)] hover:border-[#72efdd]/50 transition-all cursor-pointer backdrop-blur-sm"
                title="Skip to portfolio directly"
              >
                <span>Skip to site</span>
                <span className="text-[10px] opacity-60 group-hover:translate-x-0.5 transition-transform">
                  ➔
                </span>
              </button>
            </div>
          </header>

          {/* Center Stage: The DevOps Mascot / Whale & Container Scene */}
          <main className="w-full max-w-3xl flex-1 flex flex-col items-center justify-center my-auto py-4 z-10">
            {/* The Animated DevOps Vector Scene */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] flex items-center justify-center">
              {/* Outer Cyber Aura Ring */}
              <Motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[rgba(114,239,221,0.15)] pointer-events-none"
              />

              {/* Floating Kubernetes steering wheel orb */}
              <Motion.div
                animate={{
                  y: [-6, 6, -6],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                }}
                className="absolute -top-2 right-4 sm:right-6 w-11 h-11 rounded-full bg-[#120e2e]/90 border border-[#818cf8]/50 flex items-center justify-center shadow-[0_0_20px_rgba(129,140,248,0.35)] backdrop-blur-sm z-20"
                title="Kubernetes Engine Active"
              >
                <SiKubernetes className="w-6 h-6 text-[#818cf8]" />
              </Motion.div>

              {/* Floating Coffee Mug with animated steam */}
              <Motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 left-2 sm:left-6 w-10 h-10 rounded-full bg-[#120e2e]/90 border border-amber-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.25)] backdrop-blur-sm z-20"
                title="Fueling with Caffeine"
              >
                <Coffee className="w-5 h-5 text-amber-400" />
                {/* Steam micro particles */}
                <Motion.div
                  animate={{ y: [-2, -12], opacity: [0.8, 0], scale: [0.8, 1.4] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute -top-2 w-1.5 h-1.5 bg-amber-200 rounded-full blur-[0.5px]"
                />
              </Motion.div>

              {/* Floating Cloud Server Badge */}
              <Motion.div
                animate={{ x: [-4, 4, -4], y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-2 sm:left-4 px-2.5 py-1 rounded-md bg-[#120e2e]/90 border border-[#72efdd]/30 flex items-center gap-1.5 shadow-[0_0_12px_rgba(114,239,221,0.15)] text-[11px] font-mono text-[#72efdd] z-20"
              >
                <Server className="w-3.5 h-3.5 text-[#72efdd]" />
                <span>AWS us-east-1</span>
              </Motion.div>

              {/* The Hero DevOps Whale SVG Animation */}
              <Motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1.2, -1, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex flex-col items-center"
              >
                {/* Steam / Data Packets Spouting from Whale's Blowhole */}
                <div className="relative w-full flex justify-center mb-1">
                  <Motion.div
                    animate={{
                      y: [-2, -26],
                      opacity: [0, 0.9, 0],
                      scale: [0.6, 1.3],
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#72efdd] bg-[#120e2e] px-2 py-0.5 rounded-full border border-[#72efdd]/40 shadow-[0_0_10px_rgba(114,239,221,0.3)]"
                  >
                    <span>yaml</span>
                    <Sparkles className="w-3 h-3 text-[#80ffdb]" />
                  </Motion.div>
                </div>

                {/* Main Cute Whale & Shipping Containers SVG */}
                <svg
                  viewBox="0 0 280 200"
                  className="w-56 sm:w-72 h-auto drop-shadow-[0_12px_32px_rgba(114,239,221,0.28)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="whaleBodyGrad" x1="0" y1="0" x2="280" y2="180" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#48bfe3" />
                      <stop offset="50%" stopColor="#0077b6" />
                      <stop offset="100%" stopColor="#023e8a" />
                    </linearGradient>
                    <linearGradient id="whaleBellyGrad" x1="0" y1="0" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#b2c3df" />
                      <stop offset="100%" stopColor="#788eb5" />
                    </linearGradient>
                    <linearGradient id="containerCyan" x1="0" y1="0" x2="60" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#72efdd" />
                      <stop offset="100%" stopColor="#0096c7" />
                    </linearGradient>
                    <linearGradient id="containerPurple" x1="0" y1="0" x2="60" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#c77dff" />
                      <stop offset="100%" stopColor="#7b2cbf" />
                    </linearGradient>
                    <linearGradient id="containerGreen" x1="0" y1="0" x2="55" y2="35" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#52b788" />
                      <stop offset="100%" stopColor="#2d6a4f" />
                    </linearGradient>
                  </defs>

                  {/* Stacked Shipping Containers on Whale's Back */}
                  <g id="containers" transform="translate(68, 22)">
                    {/* Container 1: Bottom Left (Cyan - node_modules) */}
                    <Motion.g
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      transform="translate(0, 42)"
                    >
                      <rect width="64" height="34" rx="4" fill="url(#containerCyan)" stroke="#0a091a" strokeWidth="2" />
                      {/* Corrugated ribs */}
                      <line x1="12" y1="4" x2="12" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                      <line x1="24" y1="4" x2="24" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                      <line x1="36" y1="4" x2="36" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                      <line x1="48" y1="4" x2="48" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                      {/* Tiny LED */}
                      <circle cx="56" cy="10" r="2.5" fill="#80ffdb" />
                    </Motion.g>

                    {/* Container 2: Bottom Right (Purple - backend-api) */}
                    <Motion.g
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      transform="translate(68, 42)"
                    >
                      <rect width="60" height="34" rx="4" fill="url(#containerPurple)" stroke="#0a091a" strokeWidth="2" />
                      <line x1="12" y1="4" x2="12" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                      <line x1="24" y1="4" x2="24" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                      <line x1="36" y1="4" x2="36" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                      <line x1="48" y1="4" x2="48" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                      <circle cx="52" cy="10" r="2.5" fill="#e0aaff" />
                    </Motion.g>

                    {/* Container 3: Top Balanced (Green - coffee.yaml) */}
                    <Motion.g
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      transform="translate(34, 6)"
                    >
                      <rect width="58" height="32" rx="4" fill="url(#containerGreen)" stroke="#0a091a" strokeWidth="2" />
                      <line x1="12" y1="4" x2="12" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                      <line x1="24" y1="4" x2="24" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                      <line x1="36" y1="4" x2="36" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                      <line x1="46" y1="4" x2="46" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                      <text x="14" y="20" fill="#f3f6fc" fontSize="8" fontFamily="monospace" fontWeight="bold">
                        YAML 200
                      </text>
                    </Motion.g>
                  </g>

                  {/* Whale Body */}
                  <g id="whale">
                    {/* Whale Tail Fluke */}
                    <path
                      d="M24 135 C10 115 2 120 4 140 C6 150 18 152 38 142 Z"
                      fill="url(#whaleBodyGrad)"
                    />
                    <path
                      d="M24 135 C14 150 6 160 12 166 C22 170 32 158 42 144 Z"
                      fill="url(#whaleBodyGrad)"
                    />

                    {/* Whale Main Torso */}
                    <path
                      d="M32 142 C50 138 65 98 120 98 C190 98 250 115 258 145 C264 168 240 184 180 184 C100 184 55 165 32 142 Z"
                      fill="url(#whaleBodyGrad)"
                    />

                    {/* Whale Belly Texture */}
                    <path
                      d="M70 162 C110 180 170 180 230 158 C224 175 180 182 140 182 C90 182 72 172 70 162 Z"
                      fill="url(#whaleBellyGrad)"
                      opacity="0.85"
                    />

                    {/* Whale Flipper Fin */}
                    <Motion.path
                      animate={{ rotate: [-4, 8, -4] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ originX: "135px", originY: "155px" }}
                      d="M130 152 C145 168 155 182 142 186 C130 188 120 170 124 154 Z"
                      fill="#0077b6"
                      stroke="#023e8a"
                      strokeWidth="1.5"
                    />

                    {/* Whale Cute Smile */}
                    <path
                      d="M228 148 C238 154 246 152 250 148"
                      stroke="#0a091a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Whale Cheek Blush */}
                    <circle cx="226" cy="144" r="5" fill="#f43f5e" opacity="0.45" />

                    {/* Whale Eye with high-tech Dev Visor / Glasses */}
                    <g transform="translate(230, 126)">
                      {/* Visor Frame */}
                      <rect x="-4" y="-3" width="22" height="12" rx="4" fill="#120e2e" stroke="#72efdd" strokeWidth="1.8" />
                      {/* Visor HUD reflection */}
                      <line x1="0" y1="0" x2="14" y2="6" stroke="#80ffdb" strokeWidth="1.5" opacity="0.8" />
                      <circle cx="4" cy="3" r="1.5" fill="#72efdd" />
                      <circle cx="10" cy="3" r="1.5" fill="#72efdd" />
                    </g>
                  </g>

                  {/* Digital Waves / Glowing Sea Grid below whale */}
                  <g opacity="0.6">
                    <Motion.path
                      animate={{ x: [-15, 15, -15] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      d="M20 188 Q60 182 100 188 T180 188 T260 188"
                      stroke="#72efdd"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    <Motion.path
                      animate={{ x: [15, -15, 15] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      d="M10 194 Q50 190 90 194 T170 194 T250 194"
                      stroke="#818cf8"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      fill="none"
                    />
                  </g>
                </svg>
              </Motion.div>
            </div>
          </main>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
