// src/components/Terminal.jsx
import { useState, useRef, useEffect } from "react";
import {
  BANNER,
  VFS,
  PROJECTS_DATA,
  SKILLS_CATEGORIES,
  EXPERIENCE_ITEMS,
  TERMINAL_THEMES,
} from "../data/terminalData";
import { Terminal as TerminalIcon, Maximize2, Minimize2, RotateCcw, ExternalLink } from "lucide-react";

export default function Terminal({ defaultTheme = "forest", className = "" } = {}) {
  const [themeKey, setThemeKey] = useState(defaultTheme);
  const [cwd, setCwd] = useState("~");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [inProgressDraft, setInProgressDraft] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const theme = TERMINAL_THEMES[themeKey] || TERMINAL_THEMES.forest;

  // Initial welcome banner
  const [entries, setEntries] = useState([
    {
      id: 1,
      type: "banner",
      content: BANNER,
    },
    {
      id: 2,
      type: "output",
      content: (
        <div className="space-y-1.5 text-xs md:text-sm">
          <p>
            Welcome to <span className="font-bold text-emerald-400">Govind's Interactive Terminal</span>.
          </p>
          <p className="opacity-80">
            Type <span className="underline font-semibold text-lime-300">help</span> to list commands, or explore{" "}
            <span className="font-semibold text-lime-300">projects</span>,{" "}
            <span className="font-semibold text-lime-300">skills</span>,{" "}
            <span className="font-semibold text-lime-300">experience</span>, or{" "}
            <span className="font-semibold text-lime-300">theme matrix</span>.
          </p>
        </div>
      ),
    },
  ]);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-scroll internal terminal container to bottom on new output without moving outer page
  useEffect(() => {
    if (!isMinimized && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [entries, isMinimized]);

  // Focus input when clicking anywhere inside the terminal body without jumping page
  const focusInput = () => {
    inputRef.current?.focus({ preventScroll: true });
  };

  // Helper to resolve current VFS directory
  const getDirNode = (pathStr) => {
    if (pathStr === "~" || pathStr === "") return VFS;
    const parts = pathStr.replace(/^~\/?/, "").split("/").filter(Boolean);
    let curr = VFS;
    for (const part of parts) {
      if (curr.children && curr.children[part] && curr.children[part].type === "dir") {
        curr = curr.children[part];
      } else {
        return null;
      }
    }
    return curr;
  };

  // Execute terminal command
  const executeCommand = (rawCommand) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) {
      // Just an empty return
      setEntries((prev) => [
        ...prev,
        { id: Date.now(), type: "command", cwd, command: "" },
      ]);
      return;
    }

    // Add to history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);
    setInProgressDraft("");

    const [cmd, ...args] = trimmed.split(/\s+/);
    const lowerCmd = cmd.toLowerCase();
    const argStr = args.join(" ").trim();

    let outputContent = null;
    let outputType = "output";

    switch (lowerCmd) {
      case "help": {
        outputContent = (
          <div className="space-y-3 py-1 font-mono text-xs md:text-sm">
            <p className="font-semibold text-lime-300 border-b border-white/10 pb-1">
              Available Terminal Commands:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 opacity-90">
              <div>
                <span className="font-bold text-lime-400">help</span>
                <span className="opacity-75"> - Display this command manual</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">ls / dir</span>
                <span className="opacity-75"> - List files and directories</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">cd &lt;dir&gt;</span>
                <span className="opacity-75"> - Change directory (e.g. cd projects, cd ..)</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">cat &lt;file&gt;</span>
                <span className="opacity-75"> - View file content (e.g. cat about.txt)</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">skills</span>
                <span className="opacity-75"> - Show categorized technical skills</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">projects</span>
                <span className="opacity-75"> - List featured software projects</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">experience</span>
                <span className="opacity-75"> - Show career & engineering roles</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">contact</span>
                <span className="opacity-75"> - View email & social channels</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">cv / resume</span>
                <span className="opacity-75"> - Open official resume PDF</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">theme &lt;name&gt;</span>
                <span className="opacity-75"> - Switch skin (forest, dark, matrix, retro, light, cyberpunk)</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">goto &lt;sec&gt;</span>
                <span className="opacity-75"> - Smoothly scroll page to section</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">clear</span>
                <span className="opacity-75"> - Clear terminal screen (or Ctrl + L)</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">whoami</span>
                <span className="opacity-75"> - Print active session identity</span>
              </div>
              <div>
                <span className="font-bold text-lime-400">date</span>
                <span className="opacity-75"> - Print current system time</span>
              </div>
            </div>
            <p className="text-xs opacity-60 pt-1">
              Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-bold border border-white/10">Tab</kbd> for auto-complete and{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-bold border border-white/10">↑ / ↓</kbd> for history.
            </p>
          </div>
        );
        break;
      }

      case "ls":
      case "dir": {
        let targetDirNode = null;
        let targetPathLabel = cwd;

        if (argStr) {
          const cleanArg = argStr.replace(/^~\/?/, "").replace(/\/$/, "");
          if (VFS.children?.[cleanArg] && VFS.children[cleanArg].type === "dir") {
            targetDirNode = VFS.children[cleanArg];
            targetPathLabel = `~/${cleanArg}`;
          }
        }

        if (!targetDirNode) {
          targetDirNode = getDirNode(cwd);
        }

        if (!targetDirNode || !targetDirNode.children) {
          outputContent = <span className="text-red-400">Error: cannot list directory</span>;
          outputType = "error";
        } else {
          const items = Object.entries(targetDirNode.children);
          outputContent = (
            <div className="space-y-1.5 py-1 font-mono text-xs md:text-sm">
              <div className="text-[11px] opacity-60">Directory: {targetPathLabel}</div>
              <div className="flex flex-wrap gap-4">
                {items.map(([name, node]) => (
                  <button
                    key={name}
                    type="button"
                    className={
                      node.type === "dir"
                        ? "text-lime-300 font-bold hover:underline cursor-pointer bg-transparent border-0 p-0 font-mono text-left"
                        : "text-slate-200 hover:underline cursor-pointer bg-transparent border-0 p-0 font-mono text-left"
                    }
                    onClick={() => {
                      if (node.type === "dir") {
                        executeCommand(`cd ${name}`);
                      } else {
                        executeCommand(`cat ${name}`);
                      }
                    }}
                    title={node.type === "dir" ? `cd ${name}` : `cat ${name}`}
                  >
                    {name}
                    {node.type === "dir" ? "/" : ""}
                  </button>
                ))}
              </div>
            </div>
          );
        }
        break;
      }

      case "cd": {
        const dest = argStr;
        if (!dest || dest === "~" || dest === "/") {
          setCwd("~");
          outputContent = (
            <span className="opacity-75 text-xs">
              Returned to root directory <code className="text-lime-300">~</code>. Type{" "}
              <code className="text-lime-300">ls</code> to view sections.
            </span>
          );
        } else if (dest === "..") {
          if (cwd === "~") {
            outputContent = (
              <span className="opacity-75 text-xs">Already at root directory (~).</span>
            );
          } else {
            const parts = cwd.split("/").filter(Boolean);
            parts.pop();
            const newPath = parts.length <= 1 ? "~" : parts.join("/");
            setCwd(newPath);
            outputContent = (
              <span className="opacity-75 text-xs">
                Moved to <code className="text-lime-300">{newPath}</code>.
              </span>
            );
          }
        } else {
          const cleanDest = dest.replace(/\/$/, "");
          const targetNode = getDirNode(cwd);
          if (
            targetNode &&
            targetNode.children &&
            targetNode.children[cleanDest] &&
            targetNode.children[cleanDest].type === "dir"
          ) {
            const newPath = cwd === "~" ? `~/${cleanDest}` : `${cwd}/${cleanDest}`;
            setCwd(newPath);
            const childItems = Object.keys(targetNode.children[cleanDest].children || {});
            outputContent = (
              <div className="space-y-1 text-xs">
                <p className="opacity-80">
                  Changed directory to <code className="font-bold text-lime-300">{newPath}</code>.
                </p>
                {childItems.length > 0 && (
                  <p className="opacity-70">
                    Files: {childItems.join(", ")}
                  </p>
                )}
                <p className="text-[11px] opacity-60">
                  Tip: run <code className="text-lime-300">ls</code> to list or <code className="text-lime-300">{cleanDest}</code> to display this section.
                </p>
              </div>
            );
          } else {
            outputContent = (
              <span className="text-red-400">cd: no such file or directory: {dest}</span>
            );
            outputType = "error";
          }
        }
        break;
      }

      case "cat": {
        const filename = argStr;
        if (!filename) {
          outputContent = (
            <span className="text-amber-400">Usage: cat &lt;filename&gt; (e.g. cat about.txt, cat contact.json)</span>
          );
        } else {
          let fileNode = null;
          if (filename.includes("/")) {
            const parts = filename.replace(/^~\/?/, "").split("/").filter(Boolean);
            if (parts.length === 2 && VFS.children?.[parts[0]]?.children?.[parts[1]]) {
              fileNode = VFS.children[parts[0]].children[parts[1]];
            }
          } else {
            const currDir = getDirNode(cwd);
            fileNode = currDir?.children?.[filename];
            if (!fileNode && cwd !== "~") {
              fileNode = VFS.children?.[filename];
            }
          }

          if (!fileNode) {
            outputContent = (
              <span className="text-red-400">cat: {filename}: No such file or directory. Try 'ls' to list files.</span>
            );
            outputType = "error";
          } else if (fileNode.type === "dir") {
            outputContent = (
              <span className="text-amber-400">cat: {filename}: Is a directory (use 'cd {filename}' or 'ls {filename}')</span>
            );
          } else {
            outputContent = (
              <pre className="whitespace-pre-wrap font-mono text-xs md:text-sm opacity-90 leading-relaxed bg-black/25 p-3 rounded border border-white/10 shadow-inner">
                {fileNode.content}
              </pre>
            );
          }
        }
        break;
      }

      case "skills": {
        outputContent = (
          <div className="space-y-3 py-1 font-mono text-xs md:text-sm">
            <p className="font-bold text-lime-300 border-b border-lime-300/20 pb-1">
              [TECHNICAL SKILLS MATRIX]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-2.5 rounded bg-black/20 border border-white/10">
                  <span className="font-bold text-lime-400 block mb-1.5">{cat.title}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs rounded bg-white/10 border border-white/10 text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;
      }

      case "projects": {
        outputContent = (
          <div className="space-y-3 py-1 font-mono text-xs md:text-sm">
            <p className="font-bold text-lime-300 border-b border-lime-300/20 pb-1">
              [FEATURED PROJECTS]
            </p>
            <div className="space-y-2.5">
              {PROJECTS_DATA.map((proj, i) => (
                <div
                  key={i}
                  className="p-3 rounded bg-black/25 border border-white/10 hover:border-lime-400/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-lime-300 text-sm">{proj.name}</span>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 underline"
                    >
                      GitHub Repo <ExternalLink size={12} />
                    </a>
                  </div>
                  <p className="opacity-80 text-xs mt-1 leading-relaxed">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {proj.stack.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 text-[11px] rounded bg-white/5 border border-white/10 opacity-75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs opacity-60">
              Type <code className="text-lime-300">goto projects</code> to navigate to the visual portfolio gallery.
            </p>
          </div>
        );
        break;
      }

      case "experience": {
        outputContent = (
          <div className="space-y-3 py-1 font-mono text-xs md:text-sm">
            <p className="font-bold text-lime-300 border-b border-lime-300/20 pb-1">
              [CAREER & EXPERIENCE MILESTONES]
            </p>
            <div className="space-y-3">
              {EXPERIENCE_ITEMS.map((item, i) => (
                <div key={i} className="border-l-2 border-lime-400/60 pl-3 py-0.5">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-slate-100">{item.role}</span>
                    <span className="text-lime-300 font-semibold">@{item.company}</span>
                    <span className="text-xs opacity-60">({item.type} · {item.period})</span>
                  </div>
                  <p className="text-xs opacity-75 mt-1">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;
      }

      case "contact": {
        outputContent = (
          <div className="space-y-2 py-1 font-mono text-xs md:text-sm">
            <p className="font-bold text-lime-300 border-b border-lime-300/20 pb-1">[CONTACT CHANNELS]</p>
            <ul className="space-y-1.5 opacity-90">
              <li>
                <span className="opacity-60 w-24 inline-block">Email:</span>
                <a
                  href="mailto:govind803556@gmail.com"
                  className="text-lime-300 hover:underline font-semibold"
                >
                  govind803556@gmail.com
                </a>
              </li>
              <li>
                <span className="opacity-60 w-24 inline-block">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/govind-kr-yadav-715b9426a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  linkedin.com/in/govind-kr-yadav-715b9426a
                </a>
              </li>
              <li>
                <span className="opacity-60 w-24 inline-block">GitHub:</span>
                <a
                  href="https://github.com/Robertgovind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  github.com/Robertgovind
                </a>
              </li>
              <li>
                <span className="opacity-60 w-24 inline-block">Location:</span>
                <span>Kathmandu, Nepal (UTC +5:45)</span>
              </li>
            </ul>
          </div>
        );
        break;
      }

      case "cv":
      case "resume": {
        window.open("/details/Govind_Kr_Yadav_CV.pdf", "_blank");
        outputContent = (
          <div className="space-y-1 text-xs md:text-sm">
            <span className="text-lime-300 font-semibold">Opening Govind's CV in a new tab...</span>
            <p className="opacity-75">
              Direct link:{" "}
              <a
                href="/details/Govind_Kr_Yadav_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sky-400"
              >
                /details/Govind_Kr_Yadav_CV.pdf
              </a>
            </p>
          </div>
        );
        break;
      }

      case "theme": {
        const targetTheme = argStr.toLowerCase();
        if (!targetTheme) {
          outputContent = (
            <div className="space-y-1 text-xs md:text-sm">
              <p>Current terminal theme: <span className="font-bold text-lime-300">{themeKey}</span></p>
              <p className="opacity-80">
                Available themes: <code className="text-lime-300 font-semibold">forest</code>,{" "}
                <code className="text-sky-400 font-semibold">dark</code>,{" "}
                <code className="text-emerald-400 font-semibold">matrix</code>,{" "}
                <code className="text-amber-400 font-semibold">retro</code>,{" "}
                <code className="text-sky-300 font-semibold">light</code>,{" "}
                <code className="text-fuchsia-400 font-semibold">cyberpunk</code>
              </p>
              <p className="text-xs opacity-60">Example: 'theme matrix' or 'theme light'</p>
            </div>
          );
        } else if (TERMINAL_THEMES[targetTheme]) {
          setThemeKey(targetTheme);
          outputContent = (
            <span className="text-lime-300 font-medium text-xs md:text-sm">
              Terminal theme switched to <span className="font-bold uppercase">{targetTheme}</span>.
            </span>
          );
        } else {
          outputContent = (
            <span className="text-red-400 text-xs md:text-sm">
              Unknown theme: '{targetTheme}'. Available: forest, dark, matrix, retro, light, cyberpunk
            </span>
          );
          outputType = "error";
        }
        break;
      }

      case "goto":
      case "scroll": {
        const sec = argStr.toLowerCase().replace(/^#/, "");
        const validSections = ["home", "projects", "skills", "experience", "playground", "about", "certifications", "contact"];
        if (validSections.includes(sec)) {
          const el = document.getElementById(sec);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            outputContent = <span className="text-lime-300 text-xs">Navigating to #{sec}...</span>;
          } else {
            outputContent = <span className="text-red-400 text-xs">Section #{sec} not found on page.</span>;
          }
        } else {
          outputContent = (
            <span className="text-amber-400 text-xs">
              Usage: goto &lt;section&gt; (e.g. goto projects, goto playground, goto contact)
            </span>
          );
        }
        break;
      }

      case "clear":
      case "cls": {
        setEntries([]);
        setInput("");
        return;
      }

      case "whoami": {
        outputContent = (
          <div className="space-y-1 text-xs md:text-sm font-mono">
            <p>
              <span className="text-lime-300 font-bold">User:</span> visitor@portfolio-session
            </p>
            <p>
              <span className="text-lime-300 font-bold">Role:</span> Guest Explorer [Read-Only Permissions]
            </p>
            <p>
              <span className="text-lime-300 font-bold">Host:</span> Govind Kumar Yadav (Backend &amp; DevOps Engineer)
            </p>
          </div>
        );
        break;
      }

      case "date": {
        outputContent = <span className="font-mono text-xs md:text-sm">{new Date().toString()}</span>;
        break;
      }

      case "sudo": {
        outputContent = (
          <span className="text-red-400 font-mono text-xs md:text-sm">
            Permission denied: Visitor is not in the sudoers file. This incident will be reported to Govind.
          </span>
        );
        outputType = "error";
        break;
      }

      case "banner": {
        outputContent = <pre className="font-mono text-[10px] md:text-xs leading-none">{BANNER}</pre>;
        break;
      }

      default: {
        outputContent = (
          <div className="text-red-400 font-mono text-xs md:text-sm">
            command not found: <span className="font-semibold text-white">{cmd}</span>. Type{" "}
            <button
              type="button"
              className="underline cursor-pointer text-lime-300 bg-transparent border-0 p-0 font-mono inline"
              onClick={() => executeCommand("help")}
            >
              help
            </button>{" "}
            for a list of valid commands.
          </div>
        );
        outputType = "error";
      }
    }

    setEntries((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "command",
        cwd,
        command: trimmed,
      },
      {
        id: Date.now() + 1,
        type: outputType,
        content: outputContent,
      },
    ]);

    setInput("");
  };

  // Keyboard controls: Enter, Up/Down history, Tab autocomplete, Ctrl+L
  const handleKeyDown = (e) => {
    // Ctrl + L clear shortcut
    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setEntries([]);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      if (historyIdx === -1) {
        setInProgressDraft(input);
        const newIdx = history.length - 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      } else if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      if (historyIdx < history.length - 1) {
        const newIdx = historyIdx + 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput(inProgressDraft);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleAutocomplete();
    }
  };

  // Tab autocompletion
  const handleAutocomplete = () => {
    const raw = input.trimStart();
    const [commandPrefix, ...args] = raw.split(/\s+/);

    const availableCommands = [
      "help",
      "ls",
      "dir",
      "cd",
      "cat",
      "skills",
      "projects",
      "experience",
      "contact",
      "cv",
      "resume",
      "theme",
      "goto",
      "clear",
      "whoami",
      "date",
      "sudo",
      "banner",
    ];

    if (args.length === 0) {
      // Autocomplete command name
      const matches = availableCommands.filter((c) => c.startsWith(commandPrefix.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0] + " ");
      }
    } else {
      // Autocomplete file or directory name
      const currNode = getDirNode(cwd);
      if (currNode && currNode.children) {
        const partialArg = args[args.length - 1].toLowerCase();
        const fileMatches = Object.keys(currNode.children).filter((name) =>
          name.toLowerCase().startsWith(partialArg)
        );
        if (fileMatches.length === 1) {
          args[args.length - 1] = fileMatches[0];
          setInput(`${commandPrefix} ${args.join(" ")}`);
        }
      }
    }
  };

  const clearScreen = () => {
    setEntries([]);
    setInput("");
    focusInput();
  };

  const resetTerminal = () => {
    setCwd("~");
    setInput("");
    setThemeKey("forest");
    setEntries([
      { id: Date.now(), type: "banner", content: BANNER },
      {
        id: Date.now() + 1,
        type: "output",
        content: <span className="text-sm opacity-80">Terminal session reset. Type 'help' to start.</span>,
      },
    ]);
    focusInput();
  };

  return (
    <div
      ref={containerRef}
      className={`rounded-2xl border transition-all duration-300 shadow-2xl flex flex-col overflow-hidden font-mono backdrop-blur-md ${
        isFullscreen
          ? "fixed inset-3 z-50 md:inset-8"
          : "w-full max-w-5xl mx-auto h-[560px] md:h-[620px]"
      } ${className}`}
      style={{
        backgroundColor: theme.bg,
        borderColor: theme.border,
        color: theme.text,
      }}
      onClick={focusInput}
    >
      {/* Terminal Titlebar Chrome */}
      <div
        className="px-4 py-3 flex items-center justify-between border-b select-none"
        style={{
          backgroundColor: theme.headerBg,
          borderColor: theme.border,
        }}
      >
        {/* Left window control buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              resetTerminal();
            }}
            title="Close / Reset session"
            aria-label="Close / Reset session"
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-110 active:scale-95 flex items-center justify-center cursor-pointer shadow-sm group"
          >
            <span className="text-[8px] text-[#4c0000] font-bold opacity-0 group-hover:opacity-100">✕</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
            title={isMinimized ? "Restore terminal" : "Minimize terminal"}
            aria-label={isMinimized ? "Restore terminal" : "Minimize terminal"}
            className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:brightness-110 active:scale-95 flex items-center justify-center cursor-pointer shadow-sm group"
          >
            <span className="text-[8px] text-[#593f00] font-bold opacity-0 group-hover:opacity-100">−</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(!isFullscreen);
            }}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:brightness-110 active:scale-95 flex items-center justify-center cursor-pointer shadow-sm group"
          >
            <span className="text-[8px] text-[#003b0c] font-bold opacity-0 group-hover:opacity-100">+</span>
          </button>
        </div>

        {/* Center Title */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold opacity-90 truncate px-2">
          <TerminalIcon size={14} style={{ color: theme.accent }} />
          <span className="truncate">
            guest@portfolio: <span style={{ color: theme.accent }}>{cwd}</span>
          </span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 text-xs">
          {/* Quick theme selector dropdown */}
          <select
            value={themeKey}
            onChange={(e) => {
              e.stopPropagation();
              setThemeKey(e.target.value);
            }}
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] font-mono px-2 py-0.5 rounded border bg-transparent cursor-pointer outline-none transition-colors"
            style={{ borderColor: theme.border, color: theme.text }}
            title="Switch terminal theme"
          >
            {Object.entries(TERMINAL_THEMES).map(([k, t]) => (
              <option key={k} value={k} className="bg-slate-900 text-white">
                {t.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(!isFullscreen);
            }}
            className="p-1 rounded hover:bg-white/10 opacity-70 hover:opacity-100 transition-opacity"
            title={isFullscreen ? "Collapse window" : "Maximize window"}
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
        </div>
      </div>

      {/* Terminal Screen Body */}
      {!isMinimized && (
        <div
          ref={terminalBodyRef}
          className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 cursor-text select-text scroll-smooth"
        >
          {entries.map((entry) => {
            if (entry.type === "banner") {
              return (
                <pre
                  key={entry.id}
                  className="overflow-x-auto text-[9px] sm:text-[10px] md:text-xs leading-none font-mono py-1 opacity-90"
                  style={{ color: theme.accent }}
                >
                  {entry.content}
                </pre>
              );
            }

            if (entry.type === "command") {
              return (
                <div key={entry.id} className="flex items-start gap-2 pt-1 font-mono text-xs md:text-sm">
                  <span className="font-semibold select-none flex-shrink-0" style={{ color: theme.promptUser }}>
                    visitor@portfolio:
                    <span style={{ color: theme.promptPath }}>{entry.cwd}</span>$
                  </span>
                  <span className="break-all font-medium" style={{ color: theme.commandText }}>
                    {entry.command}
                  </span>
                </div>
              );
            }

            return (
              <div key={entry.id} className="pl-0 md:pl-2 text-xs md:text-sm font-mono">
                {entry.content}
              </div>
            );
          })}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1 font-mono text-xs md:text-sm">
            <span className="font-semibold select-none flex-shrink-0" style={{ color: theme.promptUser }}>
              visitor@portfolio:
              <span style={{ color: theme.promptPath }}>{cwd}</span>$
            </span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                className="terminal-input w-full bg-transparent border-0 outline-none font-mono text-xs md:text-sm p-0 m-0"
                style={{
                  color: theme.commandText,
                  caretColor: theme.cursor,
                  outline: "none",
                  border: "none",
                  boxShadow: "none",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Terminal Footer Bar */}
      {!isMinimized && (
        <div
          className="px-4 py-2 border-t flex flex-col sm:flex-row gap-2 items-center justify-between text-[11px] select-none"
          style={{ borderColor: theme.border, backgroundColor: theme.headerBg }}
        >
          {/* Quick command buttons pill bar */}
          <div className="flex flex-wrap items-center gap-1.5 opacity-85">
            <span className="text-[11px] opacity-60 mr-1">Quick:</span>
            {["help", "projects", "skills", "experience", "contact", "theme matrix", "clear"].map((quickCmd) => (
              <button
                key={quickCmd}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(quickCmd);
                }}
                className="px-2 py-0.5 rounded text-[11px] font-mono border transition-all hover:scale-105 active:scale-95 cursor-pointer bg-black/20 hover:bg-white/10"
                style={{ borderColor: theme.border, color: theme.accent }}
              >
                {quickCmd}
              </button>
            ))}
          </div>

          {/* Status info & shortcuts */}
          <div className="flex items-center gap-2 opacity-70">
            <span className="hidden md:inline">Ctrl + L clear</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden sm:inline">Tab auto-complete</span>
            <span className="hidden sm:inline">•</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                clearScreen();
              }}
              className="hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 text-inherit font-mono"
            >
              <RotateCcw size={11} /> Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
