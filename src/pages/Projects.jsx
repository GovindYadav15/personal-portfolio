import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Sports Arena",
    description: "SportsArena is a fullstack MERN-based web application that helps colleges organize and manage sports events with automated schedules and team tracking.",
    image: "/projects/sports-arena.png", 
    link: "https://github.com/Robertgovind/SportsArena",
  },
  {
    title: "Tagify",
    description: "A robust backend CMS (Content Management System) API for a modern blog platform with categories, tags, and advanced filtering. Built with Node.js, Express, and MongoDB.",
    image: "/projects/tagify.png",
    link: "https://github.com/Robertgovind/Tagify",
  },
  {
    title: "Authverse",
    description: "A modular, backend-only authentication API built using Node.js, Express, MongoDB, and JWT. Implements email/password authentication, OAuth social login, magic links, OTP login, and 2FA.",
    image: "/projects/authverse.png",
    link: "https://github.com/Robertgovind/AuthVerse",
  },
  {
    title: "ProgressFeed",
    description: "A mobile application that establishes clear transparency between Contractor, Government authority, and General public for public works tracking.",
    image: "/projects/progress-feed.png",
    link: "https://github.com/Robertgovind/Tagify",
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 px-6 md:px-12 text-slate-800 dark:text-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 dark:text-purple-400 mb-4 tracking-tight">
          My Projects
        </h2>
        <p className="text-slate-700 dark:text-purple-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
          These are some of the projects I have built to solve real-world problems and showcase my skills in backend, frontend, and DevOps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/80 dark:bg-purple-950/25 backdrop-blur-xl rounded-2xl border border-purple-200/80 dark:border-purple-800/40 shadow-[0_10px_30px_rgba(147,51,234,0.08)] hover:shadow-[0_16px_40px_rgba(147,51,234,0.18)] dark:shadow-purple-500/15 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div>
              <div className="w-full h-48 overflow-hidden bg-purple-100/50 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-purple-200 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-purple-100/90 text-sm mb-4 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
