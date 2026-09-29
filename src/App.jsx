import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Playground from "./pages/Playground.jsx";
import Contact from "./pages/Contact.jsx";
import Certifications from "./pages/Certifications.jsx";

function App() {
  useEffect(() => {
    // On visit to the page, land directly on Playground section
    if (!window.location.hash || window.location.hash === "#playground") {
      const el = document.getElementById("playground");
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "auto" });
        });
      }
    }
  }, []);

  return (
    <div className="portfolio-shell">
      <div className="site-field" aria-hidden="true" />
      <Navbar />
      <main>
        <section id="home" className="anchor-section"><Home /></section>
        <section id="projects" className="anchor-section"><Projects /></section>
        <section id="skills" className="anchor-section"><Skills /></section>
        <section id="experience" className="anchor-section"><Experience /></section>
        <section id="playground" className="anchor-section"><Playground /></section>
        <section id="about" className="anchor-section"><About /></section>
        <section id="certifications" className="anchor-section"><Certifications /></section>
        <section id="contact" className="anchor-section"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
