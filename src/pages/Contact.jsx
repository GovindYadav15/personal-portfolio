import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const contactData = [
  { name: "Email", detail: "govind803556@gmail.com", link: "mailto:govind803556@gmail.com", Icon: Mail },
  { name: "LinkedIn", detail: "Govind Kr Yadav", link: "https://www.linkedin.com/in/govind-kr-yadav-715b9426a/", Icon: Linkedin },
  { name: "GitHub", detail: "@Robertgovind", link: "https://github.com/Robertgovind", Icon: Github },
];

export default function Contact() {
  return (
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(260px,0.7fr)] gap-10 lg:gap-14 items-start">
          <div>
            <header className="max-w-[760px] mb-8 md:mb-10">
              <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Start a conversation</h2>
              <p className="max-w-[62ch] m-0 text-ink-soft text-base leading-[1.75]">I’m open to opportunities and collaborations. Reach out by email or connect with me on LinkedIn and GitHub.</p>
            </header>
            <div className="border-t border-line-strong">
              {contactData.map((item) => {
                const external = item.link.startsWith("https://");
                const Icon = item.Icon;
                return (
                  <a
                    className="flex justify-between items-center gap-5 py-5 border-b border-line text-ink hover:text-signal transition-colors group no-underline"
                    href={item.link}
                    key={item.name}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <span>
                      <span className="font-serif font-medium text-xl leading-tight group-hover:text-signal transition-colors">{item.name}</span>
                      <span className="block mt-1.5 text-ink-muted text-xs font-mono font-normal">{item.detail}</span>
                    </span>
                    <span className="flex items-center gap-2 text-ink-soft group-hover:text-signal transition-colors">
                      <Icon size={19} aria-hidden="true" />
                      {external && <ArrowUpRight size={14} aria-hidden="true" />}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
          <aside className="p-6 border border-line-strong bg-field-raised/60 backdrop-blur-sm">
            <p className="m-0 mb-4 text-ink-soft text-sm leading-[1.7]">Backend and DevOps engineering, with work spanning APIs, cloud, and application development.</p>
            <a className="inline-flex items-center gap-2 text-signal font-semibold text-sm hover:text-ink transition-colors" href="/details/Govind_Kr_Yadav_CV.pdf" target="_blank" rel="noopener noreferrer">
              Open CV <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}
