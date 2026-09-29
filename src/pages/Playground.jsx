// src/pages/Playground.jsx
import Terminal from "../components/Terminal.jsx";
import { Terminal as TerminalIcon } from "lucide-react";

export default function Playground() {
  return (
    <div className="section-shell" id="playground">
      <div className="site-container">
        <header className="section-heading">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#c8e477]">
            <TerminalIcon size={14} /> Interactive CLI Environment
          </div>
          <h2>Playground</h2>
          <p>
            Explore my background, architecture notes, skills, and projects through an interactive Unix-inspired terminal. Type commands or click the interactive badges to run them.
          </p>
        </header>

        <Terminal />
      </div>
    </div>
  );
}
