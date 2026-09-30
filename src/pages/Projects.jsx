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
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-8 md:mb-10">
          <div className="max-w-[760px]">
            <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Selected work</h2>
            <p className="max-w-[62ch] m-0 text-ink-soft text-base leading-[1.75]">Systems and applications built across backend, fullstack, and mobile development. Select a project to inspect its details.</p>
          </div>
          <a className="inline-flex items-center gap-1.5 text-signal text-sm font-semibold hover:underline" href="https://github.com/Robertgovind" target="_blank" rel="noopener noreferrer">
            More on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(220px,0.68fr)_minmax(0,1.32fr)] border border-line-strong bg-field-raised/60 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:flex md:flex-col border-b md:border-b-0 md:border-r border-line-strong" role="group" aria-label="Choose a project">
            {projectsData.map((item, index) => (
              <button
                key={item.title}
                className={`relative flex flex-col justify-center gap-2 min-h-[84px] md:min-h-[116px] p-4 md:p-6 text-left border-0 border-b border-line border-r md:border-r-0 cursor-pointer transition-colors ${
                  selected === index
                    ? "bg-field-soft before:content-[''] before:absolute before:left-0 before:top-3 before:bottom-3 before:w-0.5 before:bg-signal"
                    : "bg-transparent hover:bg-field-soft/50"
                }`}
                type="button"
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                <span className="font-serif font-medium text-base md:text-xl leading-snug text-ink">{item.title}</span>
                <span className="text-ink-muted text-xs font-mono">{selected === index ? "In focus" : "View project"}</span>
              </button>
            ))}
          </div>

          <article key={project.title} className="min-w-0 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(220px,1.1fr)] items-stretch animate-signal-arrive" aria-live="polite">
            <div className="flex flex-col items-start p-6 md:p-10">
              <div className="text-ink-muted text-[11px] font-semibold tracking-widest uppercase font-mono">Project detail</div>
              <h3 className="mt-4 mb-3.5 font-serif font-medium text-[clamp(1.9rem,3vw,2.7rem)] leading-tight tracking-tight text-ink">{project.title}</h3>
              <p className="mb-6 text-ink-soft text-sm md:text-base leading-[1.75]">{project.description}</p>
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
