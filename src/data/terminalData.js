// src/data/terminalData.js
// Decoupled virtual file system and portfolio data for the interactive CLI terminal.

export const BANNER = `
   ______            _           __   __  __          __            
  / ____/___ _   __ (_)____  ___/ /   \\ \\/ /___ _____/ /___ __   __ 
 / / __ / __ \\ | / // // __ \\/ __  /     \\  // __ \\/ __  / __ \\ | / / 
/ /_/ // /_/ /| |/ // // / / / /_/ /      / // /_/ / /_/ / /_/ /| |/ /  
\\____/ \\____/ |___//_//_/ /_/\\__,_/      /_/ \\__,_/\\__,_/\\__,_/ |___/   
          -- TERMINAL CLI v2.4.0 [Linux x86_64 // Node.js] --
         Type "help" for a list of commands or "ls" to explore.
`;

export const VFS = {
  name: "~",
  type: "dir",
  children: {
    "about.txt": {
      type: "file",
      content: `Govind Kumar Yadav
==================
Backend & DevOps Engineer based in Kathmandu, Nepal.
Passionate about designing resilient microservices, automating CI/CD pipelines,
and engineering scalable cloud infrastructure.

Focus Areas:
• Distributed systems & scalable RESTful APIs
• CI/CD pipeline automation & Docker containerization
• Cloud infrastructure on AWS & Linux system administration
• Mobile engineering with Flutter (clean architecture, offline-first)

Status: Open to high-impact Backend and DevOps opportunities.`,
    },
    "contact.json": {
      type: "file",
      content: JSON.stringify(
        {
          name: "Govind Kumar Yadav",
          role: "Backend & DevOps Engineer",
          email: "govind803556@gmail.com",
          location: "Kathmandu, Nepal",
          github: "https://github.com/Robertgovind",
          linkedin: "https://www.linkedin.com/in/govind-kr-yadav-715b9426a/",
          portfolio: "https://www.govindyadav.com.np",
        },
        null,
        2
      ),
    },
    "cv.txt": {
      type: "file",
      content: `Resume / Curriculum Vitae
=========================
Name: Govind Kumar Yadav
Title: Backend & DevOps Engineer
Education: Bachelor in Electronics, Communication & Information Eng. (IOE WRC)

Download / View full CV:
Path: /details/Govind_Kr_Yadav_CV.pdf
Type "cv" or click the link to view in browser.`,
    },
    "README.md": {
      type: "file",
      content: `# Govind's Terminal Playground
Welcome to my interactive shell! You can navigate this portfolio like a real Unix terminal.
Try running:
- 'ls' to inspect directories
- 'cd projects && ls' to inspect projects
- 'skills' to view my technical stack
- 'theme matrix' or 'theme retro' to switch terminal skins`,
    },
    projects: {
      type: "dir",
      children: {
        "sports-arena.md": {
          type: "file",
          content: `Title: Sports Arena
Category: Fullstack Web Application
Stack: MongoDB, Express.js, React.js, Node.js (MERN)
Description: College sports tournament management platform facilitating team registrations, real-time match scheduling, automated standings, and score tracking.
Repository: https://github.com/Robertgovind/SportsArena`,
        },
        "tagify.md": {
          type: "file",
          content: `Title: Tagify
Category: Backend CMS & Blog Engine
Stack: Node.js, Express, MongoDB, Mongoose, JWT
Description: High-performance content management API featuring nested categories, dynamic tag filtering, role-based access control, and search pagination.
Repository: https://github.com/Robertgovind/Tagify`,
        },
        "authverse.md": {
          type: "file",
          content: `Title: AuthVerse
Category: Security & Authentication Engine
Stack: Node.js, Express, MongoDB, JWT, OAuth 2.0, OTP
Description: Modular plug-and-play authentication framework supporting OAuth social login, passwordless magic links, time-based OTPs, and 2-Factor Authentication (2FA).
Repository: https://github.com/Robertgovind/AuthVerse`,
        },
        "progress-feed.md": {
          type: "file",
          content: `Title: ProgressFeed
Category: Mobile Application
Stack: Flutter, Dart, REST APIs, Offline Cache
Description: Transparency platform linking contractors, municipal government authorities, and the public for public-infrastructure work audits.
Repository: https://github.com/Robertgovind/Tagify`,
        },
      },
    },
    skills: {
      type: "dir",
      children: {
        "languages.txt": {
          type: "file",
          content: "JavaScript (ESNext), Python, C++, SQL, Dart, Bash/Shell",
        },
        "backend.txt": {
          type: "file",
          content: "Node.js, Express.js, MongoDB, RESTful APIs, GraphQL, Mongoose, JWT",
        },
        "devops.txt": {
          type: "file",
          content: "Docker, Jenkins, AWS (EC2, S3, IAM), Linux / Unix Admin, CI/CD, Git / GitHub",
        },
        "frontend.txt": {
          type: "file",
          content: "React.js, Flutter, HTML5, CSS3, Tailwind CSS, State Management (Provider)",
        },
      },
    },
    experience: {
      type: "dir",
      children: {
        "wiseyak.txt": {
          type: "file",
          content: `Company: Wiseyak
Role: Junior DevOps Engineer
Period: Jun 2026 - Present (Full-time)
Location: Kathmandu, Nepal (On-site)
Highlights:
• Configured automated Jenkins CI/CD pipelines for multi-service builds and testing.
• Containerized microservices with Docker for staging and production parity.
• Automated server health monitoring and deployment workflow reliability.`,
        },
        "karnovation.txt": {
          type: "file",
          content: `Company: Karnovation Inc
Role: Software Engineer
Period: Dec 2025 - Apr 2026 (Internship)
Location: Remote
Highlights:
• Engineered the 'AWS Pathway' mobile application using Flutter and Clean Architecture.
• Implemented offline-first caching via Hive for docs, markdown, and quiz data.
• Built scalable data models, mappers, and repositories with Provider state management.`,
        },
        "education.txt": {
          type: "file",
          content: `Institution: IOE Pashchimanchal Campus (WRC), Tribhuwan University
Degree: Bachelor in Electronics, Communication & Information Engineering
Duration: March 2022 - Present
Note: Government Merit Scholarship recipient.`,
        },
      },
    },
  },
};

export const PROJECTS_DATA = [
  {
    name: "Sports Arena",
    slug: "sports-arena",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    desc: "Fullstack tournament organizer with automated scheduling and team dashboards.",
    link: "https://github.com/Robertgovind/SportsArena",
  },
  {
    name: "Tagify",
    slug: "tagify",
    stack: ["Node.js", "Express", "MongoDB", "REST API"],
    desc: "Robust backend CMS engine with dynamic tagging, filtering, and indexing.",
    link: "https://github.com/Robertgovind/Tagify",
  },
  {
    name: "AuthVerse",
    slug: "authverse",
    stack: ["Node.js", "JWT", "OAuth 2.0", "2FA"],
    desc: "Modular authentication system with social logins, magic links, and OTPs.",
    link: "https://github.com/Robertgovind/AuthVerse",
  },
  {
    name: "ProgressFeed",
    slug: "progress-feed",
    stack: ["Flutter", "Dart", "Clean Arch", "Hive"],
    desc: "Public infrastructure monitoring mobile app ensuring transparent progress reporting.",
    link: "https://github.com/Robertgovind/Tagify",
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "GraphQL", "JWT"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Jenkins", "AWS (EC2, S3, IAM)", "Linux", "CI/CD", "Git"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "C++", "SQL", "Dart", "Bash"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React.js", "Flutter", "Tailwind CSS", "HTML5/CSS3", "Provider"],
  },
];

export const EXPERIENCE_ITEMS = [
  {
    role: "Junior DevOps Engineer",
    company: "Wiseyak",
    type: "Full-time",
    period: "Jun 2026 - Present",
    location: "Kathmandu, Nepal",
    summary: "Docker, Jenkins CI/CD automation, server health monitoring, and container deployments.",
  },
  {
    role: "Software Engineer",
    company: "Karnovation Inc",
    type: "Internship",
    period: "Dec 2025 - Apr 2026",
    location: "Remote",
    summary: "Built 'AWS Pathway' mobile app with Flutter, Clean Architecture, and Hive offline cache.",
  },
  {
    role: "B.E. in Electronics & Information",
    company: "IOE WRC (Tribhuwan University)",
    type: "Degree",
    period: "2022 - Present",
    location: "Pokhara, Nepal",
    summary: "Government Merit Scholarship; course focus on DSA, OS, DBMS, Networks, and Cloud Computing.",
  },
];

export const TERMINAL_THEMES = {
  forest: {
    name: "Forest (Default)",
    bg: "rgba(10, 26, 20, 0.95)",
    border: "rgba(193, 208, 195, 0.2)",
    headerBg: "rgba(16, 39, 29, 0.95)",
    text: "#edf2e9",
    promptUser: "#c8e477",
    promptPath: "#91a899",
    commandText: "#ffffff",
    accent: "#c8e477",
    muted: "#91a899",
    cursor: "#c8e477",
  },
  dark: {
    name: "Obsidian",
    bg: "rgba(9, 13, 22, 0.96)",
    border: "rgba(56, 189, 248, 0.2)",
    headerBg: "rgba(15, 23, 42, 0.95)",
    text: "#e2e8f0",
    promptUser: "#38bdf8",
    promptPath: "#94a3b8",
    commandText: "#f8fafc",
    accent: "#38bdf8",
    muted: "#64748b",
    cursor: "#38bdf8",
  },
  matrix: {
    name: "Matrix",
    bg: "rgba(0, 8, 2, 0.98)",
    border: "rgba(0, 255, 102, 0.35)",
    headerBg: "rgba(0, 20, 6, 0.95)",
    text: "#00ff66",
    promptUser: "#55ff99",
    promptPath: "#00bb44",
    commandText: "#88ffbb",
    accent: "#00ff66",
    muted: "#008833",
    cursor: "#00ff66",
  },
  retro: {
    name: "Amber CRT",
    bg: "rgba(18, 9, 0, 0.97)",
    border: "rgba(255, 176, 0, 0.3)",
    headerBg: "rgba(35, 18, 0, 0.95)",
    text: "#ffb000",
    promptUser: "#ffd566",
    promptPath: "#cc8800",
    commandText: "#ffe699",
    accent: "#ffb000",
    muted: "#996600",
    cursor: "#ffb000",
  },
  cyberpunk: {
    name: "Cyberpunk",
    bg: "rgba(17, 11, 36, 0.97)",
    border: "rgba(255, 42, 133, 0.35)",
    headerBg: "rgba(28, 16, 56, 0.95)",
    text: "#00f0ff",
    promptUser: "#ff2a85",
    promptPath: "#a855f7",
    commandText: "#ffffff",
    accent: "#ff2a85",
    muted: "#8b5cf6",
    cursor: "#00f0ff",
  },
};
