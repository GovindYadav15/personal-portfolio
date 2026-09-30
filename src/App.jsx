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
    <div className="relative isolate overflow-clip min-h-screen bg-field text-ink transition-colors duration-300">
      <div
        className="absolute -z-10 inset-x-0 top-0 h-[min(100vh,900px)] pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_78%_18%,rgba(87,126,88,0.16),transparent_42%),linear-gradient(to_right,transparent_calc(50%-0.5px),var(--line)_50%,transparent_calc(50%+0.5px))] [mask-image:linear-gradient(to_bottom,#000,transparent_82%)]"
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-[86px]"><Home /></section>
        <section id="projects" className="scroll-mt-[86px]"><Projects /></section>
        <section id="skills" className="scroll-mt-[86px]"><Skills /></section>
        <section id="experience" className="scroll-mt-[86px]"><Experience /></section>
        <section id="playground" className="scroll-mt-[86px]"><Playground /></section>
        <section id="about" className="scroll-mt-[86px]"><About /></section>
        <section id="certifications" className="scroll-mt-[86px]"><Certifications /></section>
        <section id="contact" className="scroll-mt-[86px]"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
