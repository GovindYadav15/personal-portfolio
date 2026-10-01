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
          phone: "+9779824803556",
          location: "Kalyanpur-09 Siraha, Nepal",
          github: "https://github.com/GovindYadav15",
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
        "devops-pipeline.md": {
          type: "file",
          content: `Title: DevOps CI/CD Pipeline & AWS Deployment
Category: Cloud & DevOps Automation
Stack: AWS (EC2, IAM, CloudWatch), Docker, GitHub Actions, Nginx
Description: Complete CI/CD pipeline automating build, test, and zero-downtime deployment on AWS EC2 with Docker containerization and reverse proxy.
Repository: https://github.com/GovindYadav15/DevOps-Pipeline-AWS`,
        },
        "authverse.md": {
          type: "file",
          content: `Title: AuthVerse
Category: Security & Authentication Engine
Stack: Node.js, Express, MongoDB, JWT, OAuth 2.0, OTP, 2FA
Description: Modular plug-and-play authentication framework supporting OAuth social login, passwordless magic links, time-based OTPs, and 2-Factor Authentication (2FA).
Repository: https://github.com/GovindYadav15/AuthVerse`,
        },
        "tagify.md": {
          type: "file",
          content: `Title: Tagify
Category: Backend CMS & Blog Engine
Stack: Node.js, Express, MongoDB, Mongoose, JWT, Aggregation
Description: High-performance content management API featuring nested categories, dynamic tag filtering, full-text search, and aggregation analytics.
Repository: https://github.com/GovindYadav15/Tagify`,
        },
        "aws-pathway.md": {
          type: "file",
          content: `Title: AWS Pathway Learning App
Category: Mobile Application & Backend Integration
Stack: Flutter, Dart, FastAPI, Dio, Provider, Clean Architecture
Description: Learner-focused mobile application for AWS certification preparation with exam simulators, timed tests, and performance analytics.
Repository: https://github.com/GovindYadav15/AWS-Pathway-App`,
        },
        "progress-feed.md": {
          type: "file",
          content: `Title: ProgressFeed
Category: Mobile Application
Stack: Flutter, Dart, Firebase, Cloud Storage
Description: Transparency platform linking contractors, municipal government authorities, and the public for public-infrastructure work audits.
Repository: https://github.com/GovindYadav15/ProgressFeed`,
        },
        "sports-arena.md": {
          type: "file",
          content: `Title: Sports Arena
Category: Fullstack Web Application
Stack: MongoDB, Express.js, React.js, Node.js (MERN)
Description: College sports tournament management platform facilitating team registrations, real-time match scheduling, automated standings, and score tracking.
Repository: https://github.com/GovindYadav15/SportsArena`,
        },
      },
    },
    skills: {
      type: "dir",
      children: {
        "devops.txt": {
          type: "file",
          content: "Docker, Kubernetes (K8S), CI/CD (GitHub Actions), Jenkins, Terraform, CloudFormation, Nginx, Bash",
        },
        "cloud.txt": {
          type: "file",
          content: "AWS (EC2, S3, IAM, RDS, Lambda, CloudWatch, ECR, ECS, Load Balancers)",
        },
        "backend.txt": {
          type: "file",
          content: "Node.js, Express.js, REST APIs, GraphQL, MVC Architecture, Microservices",
        },
        "databases.txt": {
          type: "file",
          content: "MongoDB, PostgreSQL, MySQL",
        },
        "languages.txt": {
          type: "file",
          content: "JavaScript (Node.js), Python, C/C++, Java, Bash, Dart",
        },
        "frontend.txt": {
          type: "file",
          content: "Flutter, Dart, HTML5, CSS3, JavaScript, React.js",
        },
      },
    },
    experience: {
      type: "dir",
      children: {
        "wiseyak.txt": {
          type: "file",
          content: `Company: Wiseyak
Role: DevOps Engineer
Period: June 2026 - Present (Full-time)
Location: Kathmandu, Bagmati, Nepal (On-site)
Highlights:
• Designed and optimized robust Jenkins CI/CD pipelines to automate machine learning deployment.
• Monitored containerized workloads across staging/prod, ensuring optimal GPU scheduling.
• Conducted model benchmarking and performance analysis for inference speeds and system scalability.`,
        },
        "karnovation.txt": {
          type: "file",
          content: `Company: Karnovation Inc.
Role: Flutter Developer
Period: Dec 2025 - May 2026 (Internship)
Location: Remote
Highlights:
• Developed learner-facing Flutter app (AWS Pathway) integrating with FastAPI backend.
• Implemented JWT and Google OAuth, REST APIs via Dio, and Provider state management.
• Built server-driven exam workflows, analytics dashboards, and discussion forums.`,
        },
        "education.txt": {
          type: "file",
          content: `Institution: IOE Pashchimanchal Campus (WRC), Tribhuwan University
Degree: Bachelor in Electronics, Communication & Information Engineering
Duration: March 2022 - May 2026
Note: Received Government Merit Scholarship for 4-year engineering degree.`,
        },
      },
    },
  },
};

export const PROJECTS_DATA = [
  {
    name: "DevOps CI/CD Pipeline & AWS Deployment",
    slug: "devops-pipeline",
    stack: ["AWS", "Docker", "GitHub Actions", "Nginx", "EC2"],
    desc: "Complete CI/CD pipeline deploying containerized Node.js app on AWS EC2 with Nginx reverse proxy.",
    link: "https://github.com/GovindYadav15/DevOps-Pipeline-AWS",
  },
  {
    name: "AuthVerse",
    slug: "authverse",
    stack: ["Node.js", "JWT", "OAuth 2.0", "2FA"],
    desc: "Modular authentication system with social logins, magic links, OTPs, and 2FA.",
    link: "https://github.com/GovindYadav15/AuthVerse",
  },
  {
    name: "Tagify CMS",
    slug: "tagify",
    stack: ["Node.js", "Express", "MongoDB", "REST API"],
    desc: "Robust backend CMS engine with dynamic tagging, filtering, full-text search, and aggregation.",
    link: "https://github.com/GovindYadav15/Tagify",
  },
  {
    name: "AWS Pathway Learning App",
    slug: "aws-pathway",
    stack: ["Flutter", "FastAPI", "Dio", "Provider"],
    desc: "Learner-focused Flutter app for AWS exam prep with timers, scoring, and analytics dashboards.",
    link: "https://github.com/GovindYadav15/AWS-Pathway-App",
  },
  {
    name: "ProgressFeed",
    slug: "progress-feed",
    stack: ["Flutter", "Dart", "Firebase", "Role Auth"],
    desc: "Public infrastructure monitoring mobile app ensuring transparent progress reporting.",
    link: "https://github.com/GovindYadav15/ProgressFeed",
  },
  {
    name: "Sports Arena",
    slug: "sports-arena",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    desc: "Fullstack tournament organizer with automated scheduling and team dashboards.",
    link: "https://github.com/GovindYadav15/SportsArena",
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: "DevOps & CI/CD",
    skills: ["Docker", "Kubernetes (K8S)", "CI/CD (GitHub Actions)", "Jenkins", "Terraform", "CloudFormation", "Nginx", "Bash"],
  },
  {
    title: "Cloud Infrastructure (AWS)",
    skills: ["AWS EC2", "S3", "IAM", "RDS", "Lambda", "CloudWatch", "ECR", "ECS", "Load Balancers"],
  },
  {
    title: "Backend & Architecture",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "MVC Architecture", "Microservices", "JWT"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Languages",
    skills: ["JavaScript (Node.js)", "Python", "C/C++", "Java", "Bash", "Dart"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["Flutter", "Dart", "HTML5", "CSS3", "JavaScript", "React.js"],
  },
];

export const EXPERIENCE_ITEMS = [
  {
    role: "DevOps Engineer",
    company: "Wiseyak",
    type: "Full-time",
    period: "June 2026 - Present",
    location: "Kathmandu, Bagmati, Nepal · On-site",
    summary: "Jenkins CI/CD automation, Docker/Kubernetes container orchestration, GPU scheduling, and inference benchmarking.",
  },
  {
    role: "Flutter Developer",
    company: "Karnovation Inc.",
    type: "Internship",
    period: "Dec 2025 - May 2026",
    location: "Remote",
    summary: "Built 'AWS Pathway' mobile app with Flutter, FastAPI backend, clean architecture, and Provider state management.",
  },
  {
    role: "B.E. in Electronics, Communication & Information",
    company: "IOE Pashchimanchal Campus (WRC), Tribhuwan University",
    type: "Degree",
    period: "March 2022 - May 2026",
    location: "Pokhara, Nepal",
    summary: "Government Merit Scholarship; course focus on DSA, OS, DBMS, Networks, and Cloud Computing.",
  },
];

export const TERMINAL_THEMES = {
  gradientBlues: {
    name: "Gradient Blues (Default)",
    bg: "rgba(10, 9, 26, 0.97)",
    border: "rgba(114, 239, 221, 0.28)",
    headerBg: "rgba(18, 14, 46, 0.98)",
    text: "#f3f6fc",
    promptUser: "#72efdd",
    promptPath: "#5e60ce",
    commandText: "#ffffff",
    accent: "#64dfdf",
    muted: "#788eb5",
    cursor: "#80ffdb",
  },
  forest: {
    name: "Forest",
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
  light: {
    name: "Paper Light",
    bg: "rgba(248, 250, 252, 0.96)",
    border: "rgba(51, 65, 85, 0.25)",
    headerBg: "rgba(226, 232, 240, 0.95)",
    text: "#0f172a",
    promptUser: "#0369a1",
    promptPath: "#475569",
    commandText: "#0f172a",
    accent: "#0284c7",
    muted: "#64748b",
    cursor: "#0284c7",
  },
};

