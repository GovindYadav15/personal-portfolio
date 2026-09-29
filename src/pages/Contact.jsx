import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const contactData = [
  { name: "Email", detail: "govind803556@gmail.com", link: "mailto:govind803556@gmail.com", Icon: Mail },
  { name: "LinkedIn", detail: "Govind Kr Yadav", link: "https://www.linkedin.com/in/govind-kr-yadav-715b9426a/", Icon: Linkedin },
  { name: "GitHub", detail: "@Robertgovind", link: "https://github.com/Robertgovind", Icon: Github },
];

export default function Contact() {
  return (
    <div className="section-shell">
      <div className="site-container">
        <div className="contact-layout">
          <div>
            <header className="section-heading">
              <h2>Start a conversation</h2>
              <p>I’m open to opportunities and collaborations. Reach out by email or connect with me on LinkedIn and GitHub.</p>
            </header>
            <div className="contact-links">
              {contactData.map(({ name, detail, link, Icon }) => {
                const external = link.startsWith("https://");
                return (
                  <a className="contact-link" href={link} key={name} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                    <span>
                      <span className="contact-name">{name}</span>
                      <span className="contact-detail">{detail}</span>
                    </span>
                    <Icon size={19} aria-hidden="true" />
                    {external && <ArrowUpRight className="contact-external" size={14} aria-hidden="true" />}
                  </a>
                );
              })}
            </div>
          </div>
          <aside className="contact-note">
            <p>Backend and DevOps engineering, with work spanning APIs, cloud, and application development.</p>
            <a className="text-link" href="/details/Govind_Kr_Yadav_CV.pdf" target="_blank" rel="noopener noreferrer">
              Open CV <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}
