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
    // Default to Home on page load/refresh unless a specific non-playground hash is explicitly requested
    if (window.location.hash && window.location.hash !== "#home" && window.location.hash !== "#playground") {
      const targetId = window.location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" });
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="relative isolate overflow-clip min-h-screen bg-field text-ink transition-colors duration-300">
      <div
        className="absolute -z-10 inset-x-0 top-0 h-[min(100vh,900px)] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_78%_18%,rgba(105,48,195,0.22),transparent_48%),radial-gradient(ellipse_at_20%_60%,rgba(86,207,225,0.14),transparent_44%),linear-gradient(to_right,transparent_calc(50%-0.5px),var(--line)_50%,transparent_calc(50%+0.5px))] [mask-image:linear-gradient(to_bottom,#000,transparent_82%)]"
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
