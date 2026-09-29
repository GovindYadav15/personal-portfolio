import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "", showLabel = false }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer ${
        isDark
          ? "bg-purple-950/80 hover:bg-purple-900/90 text-yellow-300 border border-purple-800/80 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          : "bg-purple-100/90 hover:bg-purple-200 text-purple-900 border border-purple-300/80 shadow-[0_2px_10px_rgba(147,51,234,0.12)] hover:shadow-[0_4px_14px_rgba(147,51,234,0.2)]"
      } ${className}`}
    >
      <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 transition-transform duration-500 rotate-0 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-purple-700 transition-transform duration-500 -rotate-12 group-hover:rotate-0" />
        )}
      </span>
      {showLabel && (
        <span className="text-xs font-semibold select-none">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
