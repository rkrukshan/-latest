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
              <h3 className="mb-2 font-semibold text-xl sm:text-2xl sm:text-center md:text-center lg:text-start">
                <a href={project.link} target="_blank">
                  {project.title}
                </a>
              </h3>
              <p className="mb-4 text-stone-400 text-justify sm:text-start">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    key={i}
                  >
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
