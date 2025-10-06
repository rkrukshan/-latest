import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
};

export default function Projects() {
  return (
    <div className="pb-24 px-4 sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl sm:text-4xl text-white text-center my-12 sm:my-20"
      >
        Projects
      </motion.h2>
      <div className="w-full max-w-4xl mx-auto">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="mb-12 flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start"
          >
            <div className="flex flex-col flex-wrap justify-center items-center w-full lg:w-1/4">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.4,
                  scale: {
                    type: "tween",
                    duration: 0.4,
                    bounce: 0.5,
                  },
                }}
                src={project.image}
                alt={project.title}
                className="  sm:w-[450px] sm:h-[350px] md:h-[450px] md:w-[550px] lg:h-[150px] object-fill mb-6 rounded"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={textVariants}
              className="w-full max-w-xl mx-auto px-4 sm:px-0 md:flex-col items-center justify-center lg:px-0 lg:w-auto lg:ml-3"
            >
              <div className="space-y-1">
                <div>
                  <h3 className="mb-2 font-semibold text-xl sm:text-2xl text-center sm:text-center lg:text-start">
                    {project.title}
                  </h3>
                </div>

                <div className="space-x-2 mb-2 flex justify-center lg:justify-start ">
                  <button className="rounded bg-slate-700 px-3 py-1 text-sm font-medium text-stone-300 cursor-pointer hover:bg-stone-500/45 hover:text-white hover:border-b-2 border-primary git transition-all">
                    <a href={project.link} target="_blank">
                      <div className="flex items-center justify-center gap-2">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </div>
                        <div>GitHub</div>
                      </div>
                    </a>
                  </button>

                  {project.livedemolink === "" ? (
                    <span className="rounded bg-slate-800 px-3 py-1 text-sm font-medium text-stone-300 cursor-not-allowed opacity-50">
                      Live Demo
                    </span>
                  ) : (
                    <button className="rounded bg-blue-950 px-3 py-1 text-sm font-medium text-stone-300 cursor-pointer hover:bg-blue-500/45 hover:text-white hover:border-b-2 livedemo border-secondary transition-all">
                      <a href={project.livedemolink} target="_blank">
                        <div className="flex items-center justify-center gap-2">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </div>
                          <div>Live Demo</div>
                        </div>
                      </a>
                    </button>
                  )}

                </div>
              </div>
              <p className="mb-4 text-stone-400 text-justify lg:text-start xs:tracking-tighter">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    className="flex items-center gap-2 rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    key={i}>
                    
                    {project.techlogo[i] && React.createElement(project.techlogo[i])}
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
