import { useEffect, useRef, useState } from "react";

const certificationsData = [
  { title: "Flutter & Dart - The Complete Flutter Development Course", issuer: "Udemy, Instructed by Hussain Mustafa", year: "April 2024", image: "/certificates/cf6.jpg" },
  { title: "Microsoft Learn Student Ambassador", issuer: "Pablo Veramendi", year: "2023", image: "/certificates/cf5.png" },
  { title: "Backend Development with Node.js", issuer: "Udemy, Instructed by Pierre-Henry Soria", year: "2022", image: "/certificates/cf7.jpg" },
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
    <div className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto">
        <header className="max-w-[760px] mb-8 md:mb-12">
          <h2 className="m-0 mb-4 font-serif font-medium text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.045em] text-ink">Certifications</h2>
          <p className="max-w-[62ch] m-0 text-ink-soft text-base leading-[1.75]">Credentials and learning milestones across backend development, cloud, and application engineering.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-line bg-line">
          {certificationsData.map((cert) => (
            <button
              className="flex flex-col items-start p-4 bg-field text-left cursor-pointer transition-colors hover:bg-field-raised group"
              key={`${cert.title}-${cert.year}`}
              type="button"
              onClick={() => setSelected(cert)}
              aria-label={`View certificate: ${cert.title}`}
            >
              <img className="w-full aspect-[1.55] object-cover bg-field-raised border border-line/40 rounded-sm" src={cert.image} alt="" loading="lazy" />
              <h3 className="mt-4 mb-2 font-serif font-medium text-base md:text-lg leading-snug text-ink group-hover:text-signal transition-colors">{cert.title}</h3>
              <p className="m-0 text-ink-muted text-xs leading-relaxed">{cert.issuer}</p>
              <p className="m-0 text-ink-muted/80 text-xs font-mono mt-0.5">{cert.year}</p>
              <span className="inline-block mt-3 text-signal text-xs font-semibold group-hover:underline">View certificate</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <dialog
          className="fixed z-[100] inset-0 m-auto w-[min(calc(100%-32px),1120px)] max-h-[92vh] p-0 overflow-hidden border border-line-strong bg-field text-ink shadow-2xl backdrop:bg-black/85"
          ref={certificateDialog}
          aria-labelledby="certificate-title"
          onClose={() => setSelected(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) certificateDialog.current?.close();
          }}
        >
          <section className="w-full max-h-[92vh] flex flex-col overflow-hidden bg-field">
            <header className="flex justify-between items-center gap-5 px-5 py-3.5 border-b border-line">
              <h2 id="certificate-title" className="m-0 font-serif font-medium text-base leading-tight text-ink">{selected.title}</h2>
              <button
                className="px-3 py-1.5 border border-line-strong bg-transparent text-ink text-xs font-mono cursor-pointer hover:border-signal hover:text-signal transition-colors"
                type="button"
                autoFocus
                onClick={() => certificateDialog.current?.close()}
              >
                Close
              </button>
            </header>
            <img className="max-w-full max-h-[calc(92vh-60px)] object-contain self-center p-4" src={selected.image} alt={`${selected.title} certificate`} />
          </section>
        </dialog>
      )}
    </div>
  );
}
