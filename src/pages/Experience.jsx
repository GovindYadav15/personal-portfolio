const experienceData = [
  {
    role: "Junior DevOps Engineer",
    company: "Wiseyak",
    employment: "Full-time",
    period: "Jun 2026 - Present",
    location: "Kathmandu, Bagmati, Nepal · On-site",
    description: "I work as a Junior DevOps Engineer at Wiseyak, where I am responsible for managing and automating the deployment, monitoring, and scaling of applications and services in cloud environments.",
    highlights: [
      "Implemented CI/CD pipelines using Jenkins and GitHub Actions, automating build, test, and deployment processes.",
      "Managed containerized applications using Docker and Kubernetes, ensuring high availability and scalability.",
      "Monitored system performance and implemented alerting mechanisms to proactively address issues.",
    ],
    skills: ["Docker", "Jenkins"],
    logo: "/experience/wiseyak.svg",
  },
  {
    role: "Software Engineer",
    company: "Karnovation Inc",
    employment: "Internship",
    period: "Dec 2025 - Apr 2026",
    location: "Remote",
    description: "Built AWS Pathway, a mobile learning app, using Flutter, clean architecture, REST APIs, and Provider state management.",
    highlights: [
      "Implemented offline-first caching with Hive for directories, markdown content, and quiz data, improving performance and reducing redundant API calls.",
      "Designed scalable data models, repositories, and mappers for efficient content rendering, navigation, and maintainable code.",
    ],
    skills: ["Flutter", "REST APIs", "Provider", "Hive"],
    logo: "/experience/karnovation.svg",
  },
  {
    role: "Student Ambassador",
    company: "Microsoft Learn",
    period: "Dec 2022 - 2025",
    description: "I became part of Microsoft Learn as a student ambassador, where I help students and professionals learn about cloud computing, Azure services, and Microsoft technologies through workshops, events, and online content.",
    logo: "/experience/mlsa.png",
  },
  {
    role: "Technical Team Member",
    company: "AWS Cloud Club Paschimanchal Campus Pokhara",
    period: "Feb 2025 - Present",
    description: "I am a technical team member of AWS Cloud Club, where I contribute to organizing events, workshops, and activities related to cloud computing and AWS services for students and professionals.",
    logo: "/experience/aws-ioe.png",
  },
  {
    role: "Member",
    company: "Club of Technical Students(COTS)",
    period: "Mar 2025 - Present",
    description: "This is one of the most active technical clubs in IOE Paschimanchal Campus Pokhara. I am a member of this club, where we organizes various technical events, workshops, and activities.",
    logo: "/experience/cots-logo.png",
  },
];

export default function Experience() {
  return (
    <div className="section-shell">
      <div className="site-container">
        <header className="section-heading">
          <h2>Experience</h2>
          <p>Professional roles and community work across software engineering, DevOps, cloud, and technical education.</p>
        </header>
        <div className="experience-list">
          {experienceData.map((item) => (
            <article className="experience-entry" key={`${item.company}-${item.role}`}>
              <div className="experience-date">{item.period}</div>
              <div className="experience-main">
                <img className="experience-logo" src={item.logo} alt={`${item.company} mark`} loading="lazy" />
                <h3>{item.role}</h3>
                <p className="experience-company">
                  {item.company}{item.employment ? ` · ${item.employment}` : ""}{item.location ? ` · ${item.location}` : ""}
                </p>
                {item.description && <p className="experience-description">{item.description}</p>}
                {item.highlights && (
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
                {item.skills && <p className="experience-skills">{item.skills.join(" · ")}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
