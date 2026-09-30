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
    logo: "/experience/wiseyak.png",
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
    logo: "/experience/karnovation.png",
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
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <header className="max-w-[760px] mb-8 md:mb-12">
          <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Experience</h2>
          <p className="max-w-[62ch] m-0 text-ink-soft text-base leading-[1.75]">Professional roles and community work across software engineering, DevOps, cloud, and technical education.</p>
        </header>
        <div className="border-t border-line-strong">
          {experienceData.map((item) => (
            <article className="grid grid-cols-1 md:grid-cols-[minmax(150px,0.42fr)_minmax(0,1.58fr)] gap-4 md:gap-8 py-7 md:py-9 border-b border-line" key={`${item.company}-${item.role}`}>
              <div className="text-signal tabular-nums text-xs tracking-wider font-mono">{item.period}</div>
              <div>
                <img className="w-11 h-11 object-contain mb-3.5 p-1 bg-field-raised border border-line rounded" src={item.logo} alt={`${item.company} mark`} loading="lazy" />
                <h3 className="m-0 mb-1 font-serif font-medium text-2xl leading-tight text-ink">{item.role}</h3>
                <p className="m-0 mb-3.5 text-ink-muted text-sm">
                  {item.company}{item.employment ? ` · ${item.employment}` : ""}{item.location ? ` · ${item.location}` : ""}
                </p>
                {item.description && <p className="max-w-[70ch] m-0 text-ink-soft text-sm md:text-base leading-[1.75]">{item.description}</p>}
                {item.highlights && (
                  <ul className="grid gap-2 mt-4 pl-5 text-ink-soft text-sm leading-[1.65] list-disc">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
                {item.skills && <p className="mt-4 text-ink-muted text-xs font-mono tracking-wide">{item.skills.join(" · ")}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
