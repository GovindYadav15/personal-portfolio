import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    title: "DevOps CI/CD Pipeline & AWS Deployment",
    tagline: "AWS · Docker · GitHub Actions · Nginx · EC2",
    date: "Feb 2026",
    description: "Designed and implemented a complete CI/CD pipeline to automate the build, test, and deployment of a containerized Node.js application using GitHub Actions. Containerized with Docker and deployed on AWS EC2 with Nginx as a reverse proxy, enabling zero-downtime deployments. Automated infrastructure provisioning using shell scripting and AWS services (EC2, IAM, Security Groups), with AWS CloudWatch monitoring.",
    stack: ["AWS EC2", "Docker", "GitHub Actions", "Nginx", "IAM", "CloudWatch"],
    image: "/projects/sports-arena.png",
    link: "https://github.com/GovindYadav15/DevOps-Pipeline-AWS",
  },
  {
    title: "AuthVerse: Multi-Method Auth API",
    tagline: "Node.js · Express · MongoDB · Passport.js · JWT",
    date: "May 2024",
    description: "Built a scalable authentication API supporting OAuth (Google, GitHub, Facebook), Magic Link, OTP login, and 2FA using Passport.js and JWT for secure, flexible login flows. Implemented advanced auth mechanisms including email-based Magic Links (Nodemailer), TOTP-based 2FA (Google Authenticator), and extensible backend architecture with robust session and token management.",
    stack: ["Node.js", "Express", "MongoDB", "Passport.js", "JWT", "2FA"],
    image: "/projects/authverse.png",
    link: "https://github.com/GovindYadav15/AuthVerse",
  },
  {
    title: "Tagify CMS API",
    tagline: "Node.js · Express · MongoDB · REST API",
    date: "July 2025",
    description: "Designed and implemented a modular backend CMS using Node.js, Express, and MongoDB, featuring RESTful APIs with category/tag-based post management, full-text search, filtering, sorting, pagination, and analytics (likes, views, trends) powered by aggregation pipelines. Optimized with indexed queries, schema normalization, and robust error handling.",
    stack: ["Node.js", "Express", "MongoDB", "Aggregation", "Indexing", "REST APIs"],
    image: "/projects/tagify.png",
    link: "https://github.com/GovindYadav15/Tagify",
  },
  {
    title: "AWS Pathway Learning App",
    tagline: "Flutter · FastAPI · Clean Architecture",
    date: "Feb 2026",
    description: "Developed a learner-focused Flutter mobile application for AWS Pathway, enabling students to practice AWS certification exams, take timed mock tests, read learning materials, participate in discussion forums, and track performance analytics through a seamless UI.",
    stack: ["Flutter", "Dart", "FastAPI", "Dio", "Provider", "Clean Architecture"],
    image: "/projects/progress-feed.png",
    link: "https://github.com/GovindYadav15/AWS-Pathway-App",
  },
  {
    title: "Progress Feed App",
    tagline: "Flutter · Firebase · OSM Hackfest",
    date: "April 2023",
    description: "Developed a Flutter-based Progress Feed App during OSM Hackfest to enhance transparency in government infrastructure projects, enabling real-time tracking of public works with media updates, Firebase-backed authentication and cloud storage, and role-based access for administrators and citizens.",
    stack: ["Flutter", "Firebase", "Cloud Storage", "Role Auth"],
    image: "/projects/progress-feed.png",
    link: "https://github.com/GovindYadav15/ProgressFeed",
  },
  {
    title: "Sports Arena",
    tagline: "React · Node.js · Express · MongoDB (MERN)",
    date: "2024",
    description: "SportsArena is a fullstack MERN-based web application that helps colleges organize and manage sports events with automated schedules, tournament standings, and team tracking.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "/projects/sports-arena.png",
    link: "https://github.com/GovindYadav15/SportsArena",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const project = projectsData[selected];

  return (
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-8 md:mb-10">
          <div className="max-w-[760px]">
            <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Selected work</h2>
            <p className="max-w-[62ch] m-0 text-ink-soft text-base leading-[1.75]">Systems and applications built across backend, cloud infrastructure, and mobile engineering. Select a project to inspect its details.</p>
          </div>
          <a className="inline-flex items-center gap-1.5 text-signal text-sm font-semibold hover:underline" href="https://github.com/GovindYadav15" target="_blank" rel="noopener noreferrer">
            More on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(240px,0.68fr)_minmax(0,1.32fr)] border border-line-strong bg-field-raised/60 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:flex md:flex-col border-b md:border-b-0 md:border-r border-line-strong" role="group" aria-label="Choose a project">
            {projectsData.map((item, index) => (
              <button
                key={item.title}
                className={`relative flex flex-col justify-center gap-1.5 min-h-[84px] md:min-h-[104px] p-4 md:p-5 text-left border-0 border-b border-line border-r md:border-r-0 cursor-pointer transition-colors ${
                  selected === index
                    ? "bg-field-soft before:content-[''] before:absolute before:left-0 before:top-3 before:bottom-3 before:w-0.5 before:bg-signal"
                    : "bg-transparent hover:bg-field-soft/50"
                }`}
                type="button"
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                <span className="font-serif font-medium text-sm md:text-base leading-snug text-ink">{item.title}</span>
                <span className="text-ink-muted text-[11px] font-mono">{item.date}</span>
              </button>
            ))}
          </div>

          <article key={project.title} className="min-w-0 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(220px,1.1fr)] items-stretch animate-signal-arrive" aria-live="polite">
            <div className="flex flex-col items-start p-6 md:p-10">
              <div className="text-ink-muted text-[11px] font-semibold tracking-widest uppercase font-mono">{project.date} · Project detail</div>
              <h3 className="mt-3 mb-2 font-serif font-medium text-[clamp(1.75rem,2.8vw,2.4rem)] leading-tight tracking-tight text-ink">{project.title}</h3>
              <p className="mb-4 text-ink-muted text-xs font-mono">{project.tagline}</p>
              <p className="mb-5 text-ink-soft text-sm md:text-base leading-[1.75]">{project.description}</p>
              {project.stack && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-mono bg-field border border-line text-ink-soft rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <a className="mt-auto inline-flex items-center gap-2 text-signal font-semibold text-sm hover:text-ink transition-colors" href={project.link} target="_blank" rel="noopener noreferrer">
                Open repository <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="relative min-h-[220px] md:min-h-[300px] grid place-items-center bg-field border-t lg:border-t-0 lg:border-l border-line overflow-hidden">
              <img key={project.image} className="relative z-0 w-full h-full min-h-[220px] md:min-h-[300px] object-cover saturate-75" src={project.image} alt={`${project.title} project`} loading="lazy" />
              <span className="absolute z-10 w-[min(78%,320px)] aspect-square border border-ink/40 rounded-full pointer-events-none" aria-hidden="true" />
              <span className="absolute z-10 w-[min(49%,202px)] aspect-square border border-dashed border-ink/50 rounded-full pointer-events-none" aria-hidden="true" />
              <span className="absolute z-20 top-[24%] left-[29%] w-2 h-2 border-2 border-field rounded-full bg-signal ring-1 ring-signal" aria-hidden="true" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
