import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { to: "projects", text: "Projects" },
  { to: "skills", text: "Skills" },
  { to: "experience", text: "Experience" },
  { to: "playground", text: "Playground" },
  { to: "about", text: "Education" },
  { to: "certifications", text: "Certificates" },
  { to: "contact", text: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleScroll = (id) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-field/90 backdrop-blur-md transition-colors duration-200">
      <nav
        className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto min-h-[68px] md:min-h-[76px] flex justify-between items-center gap-7"
        aria-label="Main navigation"
      >
        <a
          className="text-ink font-serif font-medium text-xl leading-none tracking-[-0.035em] whitespace-nowrap"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleScroll("home");
          }}
        >
          Govind <span className="text-signal">Yadav</span>
        </a>
        <div className="hidden md:flex items-center gap-4 lg:gap-7">
          {links.map((link) => {
            const isPlayground = link.to === "playground";
            return (
              <button
                key={link.to}
                type="button"
                onClick={() => handleScroll(link.to)}
                className={`relative py-2 px-0 bg-transparent border-0 text-xs font-medium cursor-pointer transition-colors ${
                  isPlayground
                    ? "text-ink font-semibold hover:text-signal"
                    : "text-ink-soft hover:text-signal"
                }`}
              >
                {isPlayground && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-signal text-[#0d1d16] text-[8.5px] font-mono font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1 pointer-events-none border border-signal-deep/30 animate-pulse"
                    aria-label="New feature"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d1d16] inline-block animate-ping" />
                    new
                  </span>
                )}
                {link.text}
              </button>
            );
          })}
          <ThemeToggle />
        </div>
        <button
          className="grid md:hidden place-items-center w-[42px] h-[42px] border border-line-strong bg-transparent text-ink cursor-pointer hover:border-signal transition-colors"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-line bg-field/95 backdrop-blur-md" id="mobile-navigation">
          <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto grid py-3 pb-5 gap-1">
            {links.map((link) => {
              const isPlayground = link.to === "playground";
              return (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => handleScroll(link.to)}
                  className="py-2.5 px-0 text-left bg-transparent border-0 text-ink-soft text-sm font-medium cursor-pointer transition-colors hover:text-signal flex items-center justify-between"
                >
                  <span className={isPlayground ? "text-ink font-semibold" : ""}>{link.text}</span>
                  {isPlayground && (
                    <span className="px-2 py-0.5 rounded-full bg-signal text-[#0d1d16] text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d1d16] inline-block animate-ping" />
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
            <div className="pt-2">
              <ThemeToggle showLabel />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
