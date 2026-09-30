import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggle({ className = "", showLabel = false }) {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center justify-center gap-2.5 border border-line-strong bg-transparent text-signal cursor-pointer transition-all hover:border-signal hover:bg-field-soft/40 ${
        showLabel ? "w-full justify-start px-3 py-2 text-xs font-mono text-ink-soft" : "w-[38px] h-[38px] p-0"
      } ${className}`}
    >
      {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
      {showLabel && <span>{isDark ? "Light mode" : "Dark mode"}</span>}
    </button>
  );
}
