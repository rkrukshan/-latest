import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
    },
};

export default function Experience() {
    return (
        <div className="pb-24 px-4 sm:px-6 lg:px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-3xl sm:text-4xl text-white text-center my-12 sm:my-20"
            >
                Experience
            </motion.h2>

            <div className="w-full max-w-4xl mx-auto">
                {EXPERIENCES.map((exp, i) => (
                    <div
                        key={i}
                        className="mb-12 flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-20%" }}
                            variants={textVariants}
                            className="w-full max-w-xl mx-auto px-4 sm:px-0 md:flex-col items-center justify-center lg:px-0 lg:w-auto"
                        >
                            <div className="mb-3 text-center sm:text-center">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                    {exp.role}
                                </h3>
                                <p className="text-md text-stone-400">{exp.company}</p>
                                <p className="text-sm text-stone-500">{exp.year}</p>
                            </div>

                            <p className="mb-4 text-stone-400 sm:text-justify">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                {exp.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
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
