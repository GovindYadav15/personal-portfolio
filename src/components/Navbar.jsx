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
    <header className="site-header">
      <nav className="site-container nav-rail" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={(event) => { event.preventDefault(); handleScroll("home"); }}>
          Govind <span>Yadav</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <button key={link.to} type="button" onClick={() => handleScroll(link.to)}>{link.text}</button>
          ))}
          <ThemeToggle />
        </div>
        <button className="nav-menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div className="mobile-nav-panel" id="mobile-navigation">
          <div className="site-container mobile-nav-content">
            {links.map((link) => (
              <button key={link.to} type="button" onClick={() => handleScroll(link.to)}>{link.text}</button>
            ))}
            <ThemeToggle showLabel />
          </div>
        </div>
      )}
    </header>
  );
}
