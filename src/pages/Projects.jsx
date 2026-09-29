import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    title: "Sports Arena",
    description: "SportsArena is a fullstack MERN-based web application that helps colleges organize and manage sports events with automated schedules and team tracking.",
    image: "/projects/sports-arena.png",
    link: "https://github.com/Robertgovind/SportsArena",
  },
  {
    title: "Tagify",
    description: "A robust backend CMS (Content Management System) API for a modern blog platform with categories, tags, and advanced filtering. Built with Node.js, Express, and MongoDB.",
    image: "/projects/tagify.png",
    link: "https://github.com/Robertgovind/Tagify",
  },
  {
    title: "Authverse",
    description: "A modular, backend-only authentication API built using Node.js, Express, MongoDB, and JWT. Implements email/password authentication, OAuth social login, magic links, OTP login, and 2FA.",
    image: "/projects/authverse.png",
    link: "https://github.com/Robertgovind/AuthVerse",
  },
  {
    title: "ProgressFeed",
    description: "A mobile application that establishes clear transparency between Contractor, Government authority, and General public for public works tracking.",
    image: "/projects/progress-feed.png",
    link: "https://github.com/Robertgovind/Tagify",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const project = projectsData[selected];

  return (
    <div className="section-shell">
      <div className="site-container">
        <div className="section-heading-row">
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>Systems and applications built across backend, fullstack, and mobile development. Select a project to inspect its details.</p>
          </div>
          <a className="section-link" href="https://github.com/Robertgovind" target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>

        <div className="project-console">
          <div className="project-list" role="group" aria-label="Choose a project">
            {projectsData.map((item, index) => (
              <button
                key={item.title}
                className="project-choice"
                type="button"
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                <span className="project-choice-title">{item.title}</span>
                <span className="project-choice-hint">{selected === index ? "In focus" : "View project"}</span>
              </button>
            ))}
          </div>

          <article key={project.title} className="project-focus" aria-live="polite">
            <div className="project-focus-copy">
              <div className="meta-label">Project detail</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
                Open repository <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="project-art">
              <img key={project.image} src={project.image} alt={`${project.title} project`} loading="lazy" />
              <span className="project-orbit project-orbit-outer" aria-hidden="true" />
              <span className="project-orbit project-orbit-inner" aria-hidden="true" />
              <span className="project-signal" aria-hidden="true" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
