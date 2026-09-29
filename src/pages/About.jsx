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
    <div className="section-shell">
      <div className="site-container">
        <header className="about-intro">
          <h2 className="section-heading" style={{ marginBottom: 20 }}>About</h2>
          <p>I am Govind Kumar Yadav, a backend developer passionate about building scalable APIs and backend systems using Node.js, Express.js, and MongoDB. Experienced in mentoring, DevOps practices, and cloud platforms like AWS, with a strong foundation in DSA and system design.</p>
        </header>
        <div className="section-heading">
          <h2>Education</h2>
        </div>
        <div className="education-list">
          {educationData.map((item) => (
            <article className="education-entry" key={item.institution}>
              <div className="experience-date">{item.year}</div>
              <div className="education-main">
                <h3>{item.level}</h3>
                <p className="experience-company">{item.institution}</p>
                <p className="education-description">{item.description}</p>
                {item.courses && (
                  <ul className="education-courses">
                    {item.courses.map(([label, courses]) => (
                      <li key={label}><strong>{label}:</strong> {courses}</li>
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
