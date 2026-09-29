import { useState } from "react";

export default function Home() {
  const [showCv, setShowCv] = useState(false);

  return (
    <>
      <section
        className="flex flex-col-reverse md:flex-row items-center
    justify-between gap-20 md:gap-20 py-20"
      >
        <div className="text-center md:text-left flex-1 m-15">
          <h2 className="text-3xl text-purple-400 font-semibold mb-2">Hey there, I'm</h2>
          <h1 className=" text-5xl md:text-6xl font-extrabold text-purple-600 mb-4 leading-tight">
            Govind Kr Yadav
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-6">
            Backend & DevOps Engineer
          </h3>
          <p className="text-indigo-800 text-lg leading-relaxed mb-8 max-w-xl">
            I'm a passionate Backend and DevOps Engineer skilled in
            <span className="text-blue-400 font-medium"> Node.js</span>,
            <span className="text-blue-400 font-medium"> Express</span>,
            <span className="text-blue-400 font-medium"> MongoDB</span>, and
            <span className="text-blue-400 font-medium"> AWS</span>. I love building scalable systems and
            mentoring others in modern backend development and cloud automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:govind803556@gmail.com"
              className="px-6 py-3 border border-purple-900 text-purple-400 rounded-lg font-medium hover:bg-purple-800 hover:text-white transition duration-300"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setShowCv(true)}
              className="px-6 py-3 border border-purple-900 text-purple-400 rounded-lg font-medium hover:bg-purple-800 hover:text-white transition duration-300"
            >
              View CV
            </button>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-purple-900 text-purple-400 rounded-lg font-medium hover:bg-purple-800 hover:text-white transition duration-300"
            >
              See My Projects
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end flex-1 m-15 ">
          <div
            className="relative w-75 h-80 md:w-100 md:h-100 rounded-full overflow-hidden
        border-4 border-purple-700 shadow-[0_0_30px_rgba(59,130,246,0.5)]
        hover:scale-105 transition-transform duration-500"
          >
            <img src="/details/govind_yadav.jpg" alt="Govind Kumar Yadav" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {showCv && (
        <div
          className="fixed inset-0 bg-black/80 z-50 p-4 flex items-center justify-center"
          onClick={() => setShowCv(false)}
        >
          <div
            className="w-full max-w-5xl h-[85vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
              <h4 className="text-gray-700 font-medium">Govind Kumar Yadav CV</h4>
              <button
                type="button"
                onClick={() => setShowCv(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Close
              </button>
            </div>
            <iframe src="/details/Govind_Kr_Yadav_CV.pdf" title="Govind Yadav CV" className="w-full h-[calc(85vh-48px)]" />
          </div>
        </div>
      )}
    </>
  );
}
