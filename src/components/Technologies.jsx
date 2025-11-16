import { motion } from "framer-motion";
import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { DiBitbucket, DiDocker, DiDotnet, DiJava, DiJenkins, DiMysql, DiPhp } from "react-icons/di";
import { GrGithub } from "react-icons/gr";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiCheckmk, SiFramer, SiInsomnia, SiMatomo, SiMui, SiN8N, SiPostman, SiReactrouter, SiRedux, SiSpringboot } from "react-icons/si";

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
          variants={iconVariants(2)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-[#00a7e5] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
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
          <SiReactrouter className="text-7xl text-[#D0021B] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiNextjsLine className="text-7xl text-[#C0C0C0] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}

          className="p-4"
        >
          <SiRedux className="text-7xl text-[#764abc] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiAxios className="text-7xl text-blue-900 h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiMui className="text-7xl text-[#2196f3] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiFramer className="text-7xl text-blue-400 h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <BsBootstrap className="text-7xl text-[#602C50] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <DiJava className="text-7xl text-[#5382a1] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiSpringboot className="text-7xl text-[#6DB33F] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <DiMysql className="text-7xl text-blue-300 h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <DiPhp className="text-7xl text-white h-29 w-29" />
        </motion.div>




        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <GrGithub className="text-7xl text-white h-29 w-29" />
        </motion.div>

<motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <DiBitbucket className="text-7xl text-[#2684FF] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiPostman className="text-7xl text-[#EF5B25] bg-white rounded-[50%] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <DiDocker className="text-7xl text-white font-bold bg-[#0db7ed] rounded-full h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiInsomnia className="text-7xl text-[#4000BF] bg-white rounded-[50%] h-29 w-29" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <DiJenkins className="text-7xl text-[#ffffff] h-29 w-29" />
        </motion.div>


        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiCheckmk className="text-7xl text-[#15D1A0] h-29 w-29" />
        </motion.div>


        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiMatomo className="text-7xl text-[#0ea600] h-29 w-29" />
        </motion.div>







        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiN8N className="text-7xl text-[#fd0037] h-29 w-29" />
        </motion.div> */}

      </motion.div>
    </div>
  );
}
