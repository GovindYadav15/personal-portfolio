import { useState, useEffect } from "react";
import { Menu, X, Terminal, Sparkles, Send } from "lucide-react";

const links = [
  { to: "projects", text: "Projects" },
  { to: "skills", text: "Skills" },
  { to: "experience", text: "Experience" },
  { to: "playground", text: "Playground", isTerminal: true },
  { to: "about", text: "Education" },
  { to: "certifications", text: "Certificates" },
  { to: "contact", text: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setOpen(false);
  };

  // Scroll detection for sticky header elevation & active section spy
  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["home", "projects", "skills", "experience", "playground", "about", "certifications", "contact"];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    handleWindowScroll();
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line-strong/30 bg-[#0a091a]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-line/40 bg-[#0a091a]/70 backdrop-blur-md"
      }`}
    >
      <nav
        className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto min-h-[70px] md:min-h-[76px] flex justify-between items-center gap-6"
        aria-label="Main navigation"
      >
        {/* Brand identity with Logo & Live Status */}
        <div className="flex items-center gap-3">
          <a
            className="group flex items-center gap-2.5 text-ink font-serif font-medium text-xl leading-none tracking-[-0.035em] whitespace-nowrap cursor-pointer"
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleScroll("home");
            }}
          >
            {/* Logo Mark Icon */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-field-raised border border-line-strong/60 group-hover:border-signal/70 transition-colors shadow-sm overflow-hidden">
              <span className="font-mono text-xs font-bold text-signal group-hover:scale-110 transition-transform">
                GY
              </span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-signal/30 blur-[2px]" />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif">
                Govind <span className="text-signal transition-colors group-hover:text-signal-glow">Yadav</span>
              </span>
            </div>
          </a>

          {/* Live Availability Pill */}
          <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-field-raised/80 border border-line text-[11px] font-mono text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Hire</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full bg-[#120e2e]/50 border border-line-strong/30 backdrop-blur-md">
          {links.map((link) => {
            const isActive = activeSection === link.to;
            const isPlayground = link.isTerminal;

            return (
              <button
                key={link.to}
                type="button"
                onClick={() => handleScroll(link.to)}
                className={`relative px-3 lg:px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-field-soft text-signal shadow-[0_0_15px_rgba(114,239,221,0.15)] border border-signal/30 font-semibold"
                    : isPlayground
                    ? "text-ink hover:text-signal hover:bg-field-raised/60"
                    : "text-ink-soft hover:text-ink hover:bg-field-raised/50"
                }`}
              >
                {isPlayground && (
                  <Terminal className={`w-3.5 h-3.5 ${isActive ? "text-signal" : "text-signal/70"}`} />
                )}
                <span>{link.text}</span>
                {isPlayground && !isActive && (
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right CTA / Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleScroll("contact")}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signal/10 hover:bg-signal border border-signal/40 hover:border-signal text-signal hover:text-[#0a091a] text-xs font-mono font-semibold transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>Let's Talk</span>
            <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="grid md:hidden place-items-center w-10 h-10 rounded-lg border border-line-strong bg-field-raised/80 text-ink cursor-pointer hover:border-signal hover:text-signal transition-colors backdrop-blur-sm"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div
          className="md:hidden border-t border-line-strong/40 bg-[#0a091a]/95 backdrop-blur-2xl shadow-2xl animate-signal-arrive"
          id="mobile-navigation"
        >
          <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] mx-auto py-4 pb-6 flex flex-col gap-1.5">
            {links.map((link) => {
              const isActive = activeSection === link.to;
              const isPlayground = link.isTerminal;

              return (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => handleScroll(link.to)}
                  className={`py-2.5 px-3.5 rounded-lg text-left text-sm font-medium cursor-pointer transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-field-soft text-signal border border-signal/30 font-semibold"
                      : "text-ink-soft hover:text-ink hover:bg-field-raised/60"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {isPlayground && <Terminal className="w-4 h-4 text-signal" />}
                    <span>{link.text}</span>
                  </span>
                  {isPlayground && (
                    <span className="px-2 py-0.5 rounded-full bg-signal/20 border border-signal/40 text-signal text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      CLI
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-line/40">
              <button
                type="button"
                onClick={() => handleScroll("contact")}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-signal text-[#0a091a] font-bold text-xs font-mono uppercase tracking-wider shadow-md hover:bg-signal-deep transition-colors"
              >
                <span>Get in Touch</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
