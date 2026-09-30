const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-line-strong bg-field/30">
      <div className="max-w-[1240px] w-[calc(100%-36px)] sm:w-[calc(100%-44px)] md:w-[calc(100%-64px)] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="font-serif font-medium text-lg leading-snug text-ink">Govind Kumar Yadav</div>
          <div className="text-ink-muted text-xs mt-0.5">Backend &amp; DevOps Engineer</div>
        </div>
        <nav className="flex flex-wrap gap-4.5 text-xs" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-ink-soft hover:text-signal transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-ink-muted text-xs">© {new Date().getFullYear()} Govind Yadav</div>
      </div>
    </footer>
  );
}
