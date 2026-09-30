import { Trophy, Award } from "lucide-react";

const educationData = [
  {
    level: "Bachelor in Electronics, Communication, and Information Engineering",
    institution: "IOE, Pashchimanchal Campus (WRC), Tribhuwan University · Lamachaur, Pokhara",
    year: "March 2022 - May 2026",
    description: "Honors/Awards: Received Government Scholarship on merit basis for 4-year engineering course.",
    courses: [
      ["Mathematics", "Engineering Mathematics I-III, Probability & Statistics, Applied Math, Discrete Structures, Digital Signal Analysis"],
      ["Computer Science", "Programming, OOP, DSA, Computer Graphics, DBMS, AI, Enterprise Cloud Computing, Big Data, Multimedia Systems"],
    ],
  },
  {
    level: "Intermediate in Science (+2)",
    institution: "Model Multiple College, Janakpur, Dhanusha",
    year: "June 2018 - July 2020",
    description: "Majored in Science with focus on Mathematics, Physics, and Computer Science.",
  },
  {
    level: "Secondary Education Exam (SEE)",
    institution: "Shree Mohan Model Secondary School, Ramnagar Mirchaiya, Siraha",
    year: "Completed 2018",
    description: "Graduated with distinction (GPA 3.80/4.00).",
  },
];

const honorsData = [
  {
    title: "Code With Coffee 2024 — Winner",
    organization: "ICES (Information & Communication Engineering Society)",
    year: "February 2024",
    description: "Won a coding competition organized by ICES in a team of two members. Developed and presented solutions under time pressure, demonstrating problem-solving and collaboration skills.",
  },
  {
    title: "OSM Hackfest 2023 — Participant",
    organization: "OSM Hackfest",
    year: "April 2023",
    description: "Participated as a team of four with a project to track construction progress of government infrastructure. Built a mobile app using Flutter and Firebase.",
  },
  {
    title: "Government Merit Scholarship",
    organization: "Tribhuwan University / Government of Nepal",
    year: "2022 - 2026",
    description: "Received prestigious Government Scholarship awarded strictly on competitive merit basis for the complete 4-year engineering degree.",
  },
];

export default function About() {
  return (
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <header className="max-w-[860px] mb-14 md:mb-16">
          <h2 className="m-0 mb-5 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">About</h2>
          <p className="text-ink-soft text-[clamp(1.1rem,2vw,1.3rem)] leading-[1.8]">
            Backend Developer and DevOps enthusiast with strong experience in Node.js, Express, REST APIs, CI/CD pipelines, Cloud Infrastructure, and containerized deployments. AWS Certified Cloud Practitioner with hands-on experience in automation, IaC, monitoring, and scalable backend systems.
          </p>
        </header>

        {/* Honors & Awards Section */}
        <div className="mb-16">
          <div className="max-w-[760px] mb-8 md:mb-10 flex items-center gap-3">
            <Trophy className="text-signal" size={26} aria-hidden="true" />
            <h3 className="m-0 font-serif font-medium text-[clamp(2rem,4vw,3.2rem)] leading-[0.98] tracking-[-0.045em] text-ink">Honors &amp; Awards</h3>
          </div>

          <div className="border-t border-line-strong">
            {honorsData.map((item) => (
              <article className="grid grid-cols-1 md:grid-cols-[minmax(150px,0.42fr)_minmax(0,1.58fr)] gap-4 md:gap-8 py-7 md:py-9 border-b border-line" key={item.title}>
                <div className="text-signal tabular-nums text-xs tracking-wider font-mono">{item.year}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={18} className="text-signal shrink-0" aria-hidden="true" />
                    <h4 className="m-0 font-serif font-medium text-xl md:text-2xl leading-tight text-ink">{item.title}</h4>
                  </div>
                  <p className="m-0 mb-3 text-ink-muted text-sm">{item.organization}</p>
                  <p className="max-w-[70ch] m-0 text-ink-soft text-sm md:text-base leading-[1.75]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-[760px] mb-8 md:mb-10">
          <h3 className="m-0 mb-4 font-serif font-medium text-[clamp(2rem,4vw,3.2rem)] leading-[0.98] tracking-[-0.045em] text-ink">Education</h3>
        </div>

        <div className="border-t border-line-strong">
          {educationData.map((item) => (
            <article className="grid grid-cols-1 md:grid-cols-[minmax(150px,0.42fr)_minmax(0,1.58fr)] gap-4 md:gap-8 py-7 md:py-9 border-b border-line" key={item.institution}>
              <div className="text-signal tabular-nums text-xs tracking-wider font-mono">{item.year}</div>
              <div>
                <h4 className="m-0 mb-1 font-serif font-medium text-xl md:text-2xl leading-tight text-ink">{item.level}</h4>
                <p className="m-0 mb-3.5 text-ink-muted text-sm">{item.institution}</p>
                <p className="max-w-[70ch] m-0 text-ink-soft text-sm md:text-base leading-[1.75]">{item.description}</p>
                {item.courses && (
                  <ul className="grid gap-2.5 mt-4 p-0 list-none">
                    {item.courses.map(([label, courses]) => (
                      <li key={label} className="text-ink-muted text-sm leading-[1.7]">
                        <strong className="text-ink-soft font-semibold font-mono">{label}:</strong> {courses}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
