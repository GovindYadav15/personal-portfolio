const skillGroups = [
  { category: "Languages", items: ["JavaScript", "Python", "C++"] },
  { category: "Backend", items: ["Express.js", "MongoDB", "GraphQL", "REST APIs"] },
  { category: "Cloud & DevOps", items: ["AWS", "Git", "Docker", "Linux"] },
  { category: "Frontend & Mobile", items: ["Flutter", "HTML", "CSS", "JavaScript"] },
  { category: "Concepts", items: ["DSA", "System Design", "Microservices"] },
];

export default function Skills() {
  return (
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <header className="max-w-[760px] mb-8 md:mb-12">
          <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Tools of the work</h2>
          <p className="max-w-[62ch] m-0 text-ink-soft text-base leading-[1.75]">Technologies and concepts used across backend systems, cloud infrastructure, and application development.</p>
        </header>
        <div className="border-t border-line-strong">
          {skillGroups.map((group) => (
            <div className="grid grid-cols-1 md:grid-cols-[minmax(170px,0.5fr)_1.5fr] gap-4 md:gap-8 py-6 border-b border-line items-baseline" key={group.category}>
              <h3 className="m-0 font-serif font-medium text-xl leading-snug text-ink">{group.category}</h3>
              <ul className="flex flex-wrap gap-2.5 m-0 p-0 list-none">
                {group.items.map((item, index) => (
                  <li key={`${item}-${index}`} className="px-3 py-2 border border-line text-ink-soft text-xs md:text-sm font-mono tracking-wide bg-field-raised/40 rounded hover:border-signal/50 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
