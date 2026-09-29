import { useEffect, useRef, useState } from "react";

const certificationsData = [
  { title: "Flutter & Dart - The Complete Flutter Development Course", issuer: "Udemy, Instructed by Hussain Mustafa", year: "April 2024", image: "/certificates/cf6.jpg" },
  { title: "Microsoft Learn Student Ambassador", issuer: "pablo Veramendi", year: "2023", image: "/certificates/cf5.png" },
  { title: "Backend Development with Node.js", issuer: "Udemy, Instructed by Pierre-Henry Soria", year: "20Nov 202422", image: "/certificates/cf7.jpg" },
  { title: "Microsoft Learn Student Ambassador-Alpha", issuer: "Pablo Veramendi", year: "2023", image: "/certificates/cf3.png" },
  { title: "AWS Fellowship: Cohort 1", issuer: "AWS Cloud Club Nepal", year: "2024", image: "/certificates/cf1.png" },
  { title: "AWS Academy Cloud Foundations", issuer: "AWS Academy", year: "2025", image: "/certificates/cf2.png" },
  { title: "Microsoft Learn Student Ambassador-Beta", issuer: "Pablo Veramendi", year: "2024", image: "/certificates/cf4.png" },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const certificateDialog = useRef(null);

  useEffect(() => {
    if (!selected) return undefined;
    certificateDialog.current?.showModal();
    return undefined;
  }, [selected]);

  return (
    <div className="section-shell">
      <div className="site-container">
        <header className="section-heading">
          <h2>Certifications</h2>
          <p>Credentials and learning milestones across backend development, cloud, and application engineering.</p>
        </header>
        <div className="certificate-grid">
          {certificationsData.map((cert) => (
            <button className="certificate-item" key={`${cert.title}-${cert.year}`} type="button" onClick={() => setSelected(cert)} aria-label={`View certificate: ${cert.title}`}>
              <img className="certificate-image" src={cert.image} alt="" loading="lazy" />
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.year}</p>
              <span className="certificate-open">View certificate</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <dialog className="native-dialog" ref={certificateDialog} aria-labelledby="certificate-title" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) certificateDialog.current?.close(); }}>
          <section className="dialog-panel">
            <header className="dialog-header">
              <h2 id="certificate-title">{selected.title}</h2>
              <button className="dialog-close" type="button" autoFocus onClick={() => certificateDialog.current?.close()}>Close</button>
            </header>
            <img src={selected.image} alt={`${selected.title} certificate`} />
          </section>
        </dialog>
      )}
    </div>
  );
}
