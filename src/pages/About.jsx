import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const educationData = [
  {
    level: "University",
    institution: "IOE, Pashchimanchal Campus (WRC), Tribhuwan University",
    year: "March 2022 - Present",
    description:
      "Bachelor in Electronics, Communication, and Information Engineering. Received Government Scholarship on merit basis.",
    courses: [
      "Mathematics: Engineering Mathematics I-III, Probability & Statistics, Applied Math, Discrete Structures, Digital Signal Analysis",
      "Computer Science: Programming, OOP, DSA, Computer Graphics, DBMS, AI, Enterprise Cloud Computing, Big Data, Multimedia Systems",
    ],
  },
  {
    level: "College",
    institution: "Model Multiple College, Janakpur, Dhanusha",
    year: "June 2018 - July 2020",
    description: "Intermediate Science focused on Mathematics and Computer Science.",
  },
  {
    level: "School",
    institution: "Shree Mohan Model Secondary School, Ramnagar Mirchaiya, Siraha",
    year: "Completed SEE",
    description: "Graduated with GPA 3.80/4.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 text-slate-800 dark:text-purple-200">
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 dark:text-purple-400 mb-4 tracking-tight">
          About Me
        </h2>
        <p className="text-slate-700 dark:text-purple-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
          I am Govind Kumar Yadav, a backend developer passionate about building scalable APIs and backend systems using Node.js, Express.js, and MongoDB. Experienced in mentoring, DevOps practices, and cloud platforms like AWS, with a strong foundation in DSA and system design.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line with vibrant glowing gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-indigo-400 to-fuchsia-400 dark:from-purple-600 dark:via-purple-700 dark:to-pink-600 rounded-full shadow-sm"></div>

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-12 flex flex-col md:flex-row items-center w-full relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline circle */}
            <div className="z-10 w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-pink-500 border-4 border-white dark:border-gray-900 shadow-[0_0_15px_rgba(147,51,234,0.5)] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"></div>

            {/* Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="bg-white/80 dark:bg-purple-950/25 backdrop-blur-xl p-6 rounded-2xl border border-purple-200/80 dark:border-purple-800/40 shadow-[0_10px_30px_rgba(147,51,234,0.08)] hover:shadow-[0_16px_40px_rgba(147,51,234,0.18)] dark:shadow-purple-500/15 w-full md:w-1/2 hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-purple-200 mb-1">
                {item.level}
              </h3>
              <p className="text-purple-800 dark:text-purple-300 font-semibold mb-1">
                {item.institution}
              </p>
              <p className="text-slate-500 dark:text-purple-400 text-sm font-medium italic mb-2">
                {item.year}
              </p>
              <p className="text-slate-700 dark:text-purple-100 mb-2 leading-relaxed font-normal">
                {item.description}
              </p>
              {item.courses && (
                <ul className="list-disc list-inside text-slate-600 dark:text-purple-200/90 text-sm space-y-1">
                  {item.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
