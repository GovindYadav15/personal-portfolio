import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <SiGithub className="w-5 h-5" />,
      link: "https://github.com/Robertgovind",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/govind-kr-yadav-715b9426a/",
    },
    {
      name: "Email",
      icon: <SiGmail className="w-5 h-5" />,
      link: "mailto:govind803556@gmail.com",
    },
  ];

  const footerNav = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#f6f2ff] via-[#eee7fe] to-[#e6dcff] dark:bg-gradient-to-br dark:from-gray-950 dark:via-[#0d1b2a] dark:to-[#000814] text-slate-700 dark:text-purple-200 py-14 px-6 md:px-12 overflow-hidden border-t border-purple-200/80 dark:border-purple-900/40 transition-colors duration-300">
      {/* Ambient background light orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/15 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700 -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-purple-800 dark:text-purple-400 mb-1">
            Govind Kr Yadav
          </h3>
          <p className="text-slate-600 dark:text-purple-300 text-sm font-semibold">
            Backend & DevOps Engineer
          </p>
        </div>

        {/* Footer Navbar */}
        <nav className="flex gap-2.5 flex-wrap justify-center">
          {footerNav.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              duration={500}
              className="px-3.5 py-1.5 rounded-xl bg-white/80 hover:bg-purple-600 hover:text-white dark:bg-purple-900/30 dark:hover:bg-purple-800/60 dark:text-purple-200 text-slate-800 font-semibold border border-purple-200/80 dark:border-purple-800/40 shadow-sm transition-all duration-200 text-sm cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-3.5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/90 hover:bg-purple-600 hover:text-white dark:bg-purple-900/40 dark:hover:bg-purple-800/60 dark:text-purple-200 text-slate-800 border border-purple-200/80 dark:border-purple-800/40 shadow-sm transition-all duration-200"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-purple-200 dark:border-purple-800/40 mt-10 pt-6 text-center text-sm font-medium text-slate-600 dark:text-purple-400">
        &copy; {new Date().getFullYear()} Govind Kr Yadav. All rights reserved.
      </div>
    </footer>
  );
}
