const skillGroups = [
  { category: "Languages", items: ["JavaScript", "Python", "C++"] },
  { category: "Backend", items: ["Express.js", "MongoDB", "GraphQL", "REST APIs"] },
  { category: "Cloud & DevOps", items: ["AWS", "Git", "Docker", "Linux"] },
  { category: "Frontend & Mobile", items: ["Flutter", "HTML", "CSS", "JavaScript"] },
  { category: "Concepts", items: ["DSA", "System Design", "Microservices"] },
];

export default function Skills() {
  return (
    <div className="section-shell">
      <div className="site-container">
        <header className="section-heading">
          <h2>Tools of the work</h2>
          <p>Technologies and concepts used across backend systems, cloud infrastructure, and application development.</p>
        </header>
        <div className="skill-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skill-items">
                {group.items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
