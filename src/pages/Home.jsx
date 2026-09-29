import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  const [showCv, setShowCv] = useState(false);
  const cvDialog = useRef(null);

  useEffect(() => {
    if (!showCv) return undefined;
    cvDialog.current?.showModal();
    return undefined;
  }, [showCv]);

  return (
    <div className="site-container hero-shell">
      <div className="hero-copy">
        <h1>Govind <span>Kumar Yadav</span></h1>
        <p className="hero-role">Backend &amp; DevOps Engineer</p>
        <p className="hero-description">
          I build backend systems and the infrastructure behind them, working across Node.js, Express, MongoDB, and AWS. I also enjoy mentoring others in modern backend development and cloud automation.
        </p>
        <div className="button-row">
          <a className="button-primary" href="#projects">
            Explore projects <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <button className="button-secondary" type="button" onClick={() => setShowCv(true)}>
            View CV <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          <a className="button-secondary" href="mailto:govind803556@gmail.com">Get in touch</a>
        </div>
        <ul className="hero-signal-list" aria-label="Selected technologies">
          <li>Node.js</li><li>Express</li><li>MongoDB</li><li>AWS</li>
        </ul>
      </div>

      <div className="hero-portrait-field" aria-label="Portrait of Govind Kumar Yadav">
        <span className="orbit orbit-one" aria-hidden="true" />
        <span className="orbit orbit-two" aria-hidden="true" />
        <span className="orbit orbit-three" aria-hidden="true" />
        <span className="orbit-point orbit-point-a" aria-hidden="true" />
        <span className="orbit-point orbit-point-b" aria-hidden="true" />
        <span className="orbit-point orbit-point-c" aria-hidden="true" />
        <div className="portrait-frame">
          <img src="/details/govind_yadav.jpg" alt="Govind Kumar Yadav" fetchPriority="high" />
        </div>
        <span className="portrait-caption">Backend · DevOps</span>
      </div>

      {showCv && (
          <dialog className="native-dialog" ref={cvDialog} aria-labelledby="cv-title" onClose={() => setShowCv(false)} onClick={(event) => { if (event.target === event.currentTarget) cvDialog.current?.close(); }}>
          <section className="dialog-panel">
            <header className="dialog-header">
              <h2 id="cv-title">Govind Kumar Yadav · CV</h2>
              <button className="dialog-close" type="button" autoFocus onClick={() => cvDialog.current?.close()}>Close</button>
            </header>
            <iframe src="/details/Govind_Kr_Yadav_CV.pdf" title="Govind Kumar Yadav CV" />
          </section>
          </dialog>
      )}
    </div>
  );
}
