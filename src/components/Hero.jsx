import React from "react";
import profilePic from "../assets/images/Rukmanghan.png";
import { HERO_CONTENT } from "../constants/index";
import resume from '../assets/PDF/S.Rukmanghan_Resume.pdf'
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.1 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
};

export default function Hero() {
  return (
    <div className="pb-4 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex sm:justify-center mr-28 lg:p-8">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              src={profilePic}
              alt="Rukmanghan"
              className=" rounded-3xl w-[250px] h-[420px] md:w-[250px] md:h-[450px] lg:h-[550px] lg:w-[350px] hover:shadow-slate-400 hover:shadow-xl transition-all delay-150"
            />
          </div>
        </div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center md:justify-center lg:items-start mt-10">
            <h2 className="text-4xl pb-2 md:text-5xl lg:text-7xl tracking-tighter">Rukmanghan.S</h2>
            <span className="text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text md:text-5xl tracking-tight text-transparent">
              Software Engineer
            </span>
            <p className="text-sm my-2 max-w-lg py-6 md:text-2xl text-justify leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            <motion.a
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              href={resume}
              download="S.Rukmanghan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
