import Terminal from "../components/Terminal.jsx";
import {
  Terminal as TerminalIcon,
  Sparkles,
  Rocket,
  Palette,
  FolderTree,
  Cpu,
  Zap,
} from "lucide-react";

export default function Playground() {
  const quickActions = [
    {
      cmd: "deploy",
      label: "Launch Deploy Animation",
      desc: "Watch the DevOps CI/CD launch",
      icon: Rocket,
      color: "text-amber-400",
      borderColor: "hover:border-amber-400/50",
      badge: "LIVE PIPELINE",
    },
    {
      cmd: "theme cyberpunk",
      label: "theme cyberpunk",
      desc: "Switch to neon cyberpunk skin",
      icon: Palette,
      color: "text-fuchsia-400",
      borderColor: "hover:border-fuchsia-400/50",
      badge: "THEMES",
    },
    {
      cmd: "ls",
      label: "ls ~",
      desc: "Explore virtual Linux filesystem",
      icon: FolderTree,
      color: "text-emerald-400",
      borderColor: "hover:border-emerald-400/50",
      badge: "VFS KERNEL",
    },
    {
      cmd: "skills",
      label: "skills --all",
      desc: "Query categorized technical stack",
      icon: Cpu,
      color: "text-cyan-400",
      borderColor: "hover:border-cyan-400/50",
      badge: "TECH STACK",
    },
  ];

  const handleQuickCommand = (cmd) => {
    window.dispatchEvent(new CustomEvent("run-terminal-command", { detail: cmd }));
  };

  return (
    <div className="relative py-20 md:py-28 border-t border-line overflow-hidden" id="playground">
      {/* Subtle Ambient Glowing Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(114,239,221,0.08)_0%,rgba(105,48,195,0.08)_40%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        {/* Section Header */}
        <header className="max-w-[820px] mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-field-raised/90 border border-line-strong text-xs font-mono uppercase tracking-widest text-signal shadow-sm">
            <TerminalIcon size={14} className="text-signal animate-pulse" />
            <span>Interactive CLI Environment</span>
            <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
            <span className="text-[10px] text-ink-muted">v2.5 bash</span>
          </div>

          <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">
            DevOps <span className="text-signal">Playground</span>
          </h2>

          <p className="max-w-[65ch] m-0 text-ink-soft text-base leading-[1.75]">
            Explore my background, cloud architectures, experience, and certifications through an interactive Unix terminal. 
            Type commands, use <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs border border-white/10 text-ink">Tab</kbd> for auto-completion, or click any quick card below to trigger execution in real time.
          </p>

          {/* Quick-Launch Command Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {quickActions.map((action) => {
              const ActionIcon = action.icon;
              return (
                <button
                  key={action.cmd}
                  type="button"
                  onClick={() => handleQuickCommand(action.cmd)}
                  className={`group relative p-3 rounded-xl bg-field-raised/60 hover:bg-field-raised border border-line-strong/60 ${action.borderColor} text-left transition-all duration-200 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm`}
                  title={`Click to run '${action.cmd}' in terminal`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider font-semibold">
                      {action.badge}
                    </span>
                    <ActionIcon className={`w-4 h-4 ${action.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="font-mono text-xs font-bold text-ink group-hover:text-signal transition-colors flex items-center gap-1.5">
                    <span className="text-signal">$</span>
                    <span>{action.label}</span>
                  </div>
                  <p className="text-[11px] text-ink-muted mt-1 leading-normal">
                    {action.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </header>

        {/* Terminal Container with Enhanced Cyber Glow Frame */}
        <div className="relative group">
          {/* Subtle Outer Neon Accent Frame */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-signal/20 via-purple-500/20 to-signal/20 opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-500 pointer-events-none -z-10" />
          
          <Terminal />
        </div>

        {/* Pro Tips Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-4 px-2 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-signal" />
            <span>Supported: <code className="text-ink-soft">help</code>, <code className="text-ink-soft">cat</code>, <code className="text-ink-soft">cd</code>, <code className="text-ink-soft">theme</code>, <code className="text-ink-soft">deploy</code>, <code className="text-ink-soft">clear</code></span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={13} className="text-amber-400" />
            <span>Try typing <code className="text-amber-300 font-bold">deploy</code> to replay the DevOps launch rocket!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
