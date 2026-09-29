import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "home", text: "Home" },
    { to: "about", text: "About" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projects" },
    { to: "experience", text: "Experience" },
    { to: "certifications", text: "Certifications" },
    { to: "contact", text: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="bg-[#fcfaff]/85 dark:bg-gray-900/90 backdrop-blur-xl text-slate-800 dark:text-white sticky top-0 z-50 shadow-[0_4px_25px_rgba(147,51,234,0.06)] dark:shadow-md border-b border-purple-100/80 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-3.5 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
          className="text-2xl font-bold text-purple-700 dark:text-purple-400 tracking-wide flex items-center"
        >
          <img
            src="/details/name-logo-1.png"
            alt="Logo"
            className="h-12 md:h-14 w-auto inline mr-2 transition-transform duration-300 hover:scale-105"
          />
        </a>

        <div className="hidden md:flex space-x-7 items-center">
          {links.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="text-slate-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 font-semibold cursor-pointer transition-colors duration-200 text-sm tracking-wide"
            >
              {link.text}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-slate-800 dark:text-purple-300 p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 focus:outline-none transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl leading-none">☰</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fcfaff]/95 dark:bg-gray-800/95 backdrop-blur-xl px-6 py-4 space-y-3 border-b border-purple-100 dark:border-gray-700 shadow-xl animate-fadeIn">
          {links.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="block w-full text-left font-semibold text-slate-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 py-1.5"
            >
              {link.text}
            </button>
          ))}
          <div className="pt-2 border-t border-purple-100 dark:border-gray-700">
            <ThemeToggle showLabel={true} />
          </div>
        </div>
      )}
    </nav>
  );
}
