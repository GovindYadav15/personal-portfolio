const educationData = [
  {
    level: "University",
    institution: "IOE, Pashchimanchal Campus (WRC), Tribhuwan University",
    year: "March 2022 - Present",
    description: "Bachelor in Electronics, Communication, and Information Engineering. Received Government Scholarship on merit basis.",
    courses: [
      ["Mathematics", "Engineering Mathematics I-III, Probability & Statistics, Applied Math, Discrete Structures, Digital Signal Analysis"],
      ["Computer Science", "Programming, OOP, DSA, Computer Graphics, DBMS, AI, Enterprise Cloud Computing, Big Data, Multimedia Systems"],
    ],
  },
  {
    level: "College",
    institution: "Model Multiple College, Janakpur, Dhanusha",
    year: "June 2018 - July 2020",
    description: "Intermediate Science focused on Mathematics and Computer Science.",
  },
  {
    level: "School",
    institution: "Shree Mohan Model Secondary School, Ramnagar Mirchaiya, Siraha",
    year: "Completed SEE",
    description: "Graduated with GPA 3.80/4.",
  },
];

export default function About() {
  return (
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <header className="max-w-[860px] mb-14 md:mb-16">
          <h2 className="m-0 mb-5 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">About</h2>
          <p className="text-ink-soft text-[clamp(1.1rem,2vw,1.3rem)] leading-[1.8]">
            I am Govind Kumar Yadav, a backend developer passionate about building scalable APIs and backend systems using Node.js, Express.js, and MongoDB. Experienced in mentoring, DevOps practices, and cloud platforms like AWS, with a strong foundation in DSA and system design.
          </p>
        </header>

        <div className="max-w-[760px] mb-8 md:mb-10">
          <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Education</h2>
        </div>

        <div className="border-t border-line-strong">
          {educationData.map((item) => (
            <article className="grid grid-cols-1 md:grid-cols-[minmax(150px,0.42fr)_minmax(0,1.58fr)] gap-4 md:gap-8 py-7 md:py-9 border-b border-line" key={item.institution}>
              <div className="text-signal tabular-nums text-xs tracking-wider font-mono">{item.year}</div>
              <div>
                <h3 className="m-0 mb-1 font-serif font-medium text-xl md:text-2xl leading-tight text-ink">{item.level}</h3>
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
