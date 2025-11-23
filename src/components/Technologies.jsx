import React from "react";
import { motion } from "framer-motion";
import { BsBootstrap } from "react-icons/bs";
import { DiBitbucket, DiDocker, DiDotnet, DiJava, DiJenkins, DiMysql, DiPhp } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill, RiWebhookFill } from "react-icons/ri";
import { SiAxios, SiCheckmk, SiFramer, SiInsomnia, SiJenkins, SiJira, SiMatomo, SiMui, SiNgrok, SiPostman, SiReactrouter, SiRedux, SiSpringboot } from "react-icons/si";

// Icon animation variants
const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
});

export default function Technologies() {
  const icons = [
    { component: RiReactjsLine, color: "#00a7e5", duration: 2 },
    { component: RiTailwindCssFill, color: "#06B6D4", duration: 2.5 },
    { component: SiReactrouter, color: "#D0021B", duration: 2 },
    { component: RiNextjsLine, color: "#C0C0C0", duration: 2.5 },
    { component: SiRedux, color: "#764abc", duration: 2 },
    { component: SiAxios, color: "blue", duration: 2.5 },
    { component: SiMui, color: "#2196f3", duration: 2 },
    { component: SiFramer, color: "blue", duration: 2.5 },
    { component: BsBootstrap, color: "#602C50", duration: 2 },
    { component: DiJava, color: "#5382a1", duration: 2.5 },
    { component: SiSpringboot, color: "#6DB33F", duration: 2 },
    { component: DiMysql, color: "skyblue", duration: 2.5 },
    { component: DiPhp, color: "white", duration: 2 },
    { component: GrGithub, color: "white", duration: 2.5 },
    { component: DiBitbucket, color: "#2684FF", duration: 2 },
    { component: SiPostman, color: "#EF5B25", duration: 2.5 },
    { component: DiDocker, color: "white", duration: 2 },
    { component: SiInsomnia, color: "#4000BF", duration: 2.5 },
    { component: SiNgrok, color: "white", duration: 2.5 },
    { component: DiJenkins, color: "white", duration: 2 },
    { component: SiCheckmk, color: "#15D1A0", duration: 2.5 },
    { component: SiMatomo, color: "#0ea600", duration: 2 },
    { component: SiJira, color: "#0146b3", duration: 2.5 },
    { component: RiWebhookFill, color: "white", duration: 2 },
    { component: FcLinux, color: "white", duration: 2.5 },
  ];

  return (
    <div>
      {/* Heading lazy load */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center text-white my-20"
      >
        Technologies
      </motion.h2>

      {/* Icons container */}
      <motion.div
        className="flex flex-wrap lg:flex-row items-center justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {icons.map((icon, i) => {
          const IconComponent = icon.component;
          return (
            <motion.div
              key={i}
              className="p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              animate="animate"
              variants={iconVariants(icon.duration)}
            >
              <IconComponent
                className="text-7xl h-29 w-29"
                style={{ color: icon.color }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
