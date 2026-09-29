import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

const contactData = [
  {
    name: "Email",
    icon: <SiGmail className="w-10 h-10 text-red-500" />,
    link: "mailto:govind803556@gmail.com",
    detail: "govind803556@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    link: "https://www.linkedin.com/in/govind-kr-yadav-715b9426a/",
    detail: "Govind Kr Yadav",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-10 h-10 text-slate-800 dark:text-gray-200" />,
    link: "https://github.com/Robertgovind",
    detail: "@Robertgovind",
  },
];

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 text-slate-800 dark:text-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 dark:text-purple-400 mb-4 tracking-tight">
          Contact Me
        </h2>
        <p className="text-slate-700 dark:text-purple-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
          I’m open to opportunities and collaborations. Reach out to me via email or connect with me on LinkedIn and GitHub.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactData.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-8 bg-white/80 dark:bg-purple-950/25 backdrop-blur-xl rounded-2xl border border-purple-200/80 dark:border-purple-800/40 shadow-[0_10px_30px_rgba(147,51,234,0.08)] hover:shadow-[0_16px_40px_rgba(147,51,234,0.2)] dark:shadow-purple-500/15 transition-all duration-300 cursor-pointer hover:border-purple-400 dark:hover:border-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="p-3 bg-purple-50 dark:bg-purple-900/40 rounded-2xl border border-purple-100 dark:border-purple-800/40 shadow-sm">
              {contact.icon}
            </div>
            <h3 className="text-slate-900 dark:text-purple-200 font-bold text-lg mt-4">
              {contact.name}
            </h3>
            <p className="text-purple-700 dark:text-purple-400 text-xs font-semibold mt-1">
              {contact.detail}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
