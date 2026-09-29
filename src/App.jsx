import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import Certifications from "./pages/Certifications.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf7ff] dark:bg-[#060913] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f8f4ff] via-[#f1ebff] to-[#eae2fd] dark:from-gray-900 dark:via-[#0d1b2a] dark:to-[#000814]"></div>
      
      {/* Glowing ambient light orbs matching the cosmic purple aesthetic */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-purple-400/20 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-indigo-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fuchsia-400/10 dark:bg-purple-800/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <Navbar />

      <main className="flex-grow scroll-smooth">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
