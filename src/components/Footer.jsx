const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div>
          <div className="footer-name">Govind Kumar Yadav</div>
          <div className="footer-role">Backend &amp; DevOps Engineer</div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="footer-copy">© {new Date().getFullYear()} Govind Yadav</div>
      </div>
    </footer>
  );
}
