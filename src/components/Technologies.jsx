import { motion } from "framer-motion";
import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { DiIllustrator, DiMongodb, DiPhotoshop } from "react-icons/di";
import { GrGithub } from "react-icons/gr";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
});

export default function Technologies() {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center text-white my-29"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap lg:flex-row items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-[#06B6D4] h-29 w-29" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          
          className="p-4"
        >
          <SiRedux className="text-7xl text-purple-500 h-29 w-29" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <RiNextjsLine className="text-7xl text-white h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <TbBrandFramerMotion className="text-7xl text-white h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <GrGithub className="text-7xl text-white h-29 w-29" />
        </motion.div>
      </motion.div>
    </div>
  );
}
