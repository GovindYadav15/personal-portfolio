import Terminal from "../components/Terminal.jsx";
import { Terminal as TerminalIcon } from "lucide-react";

export default function Playground() {
  return (
    <div className="py-20 md:py-28 border-t border-line" id="playground">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <header className="max-w-[760px] mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-signal">
            <TerminalIcon size={14} /> Interactive CLI Environment
          </div>
          <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Playground</h2>
          <p className="max-w-[62ch] m-0 text-ink-soft text-base leading-[1.75]">
            Explore my background, architecture notes, skills, and projects through an interactive Unix-inspired terminal. Type commands or click the interactive badges to run them.
          </p>
        </header>

        <Terminal />
      </div>
    </div>
  );
}
