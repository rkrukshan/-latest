import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { SiStrapi } from "react-icons/si";

// Lazy load all icons individually
const RiReactjsLine = React.lazy(() => import("react-icons/ri").then(mod => ({ default: mod.RiReactjsLine })));
const RiTailwindCssFill = React.lazy(() => import("react-icons/ri").then(mod => ({ default: mod.RiTailwindCssFill })));
const SiReactrouter = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiReactrouter })));
const RiNextjsLine = React.lazy(() => import("react-icons/ri").then(mod => ({ default: mod.RiNextjsLine })));
const SiRedux = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiRedux })));
const SiAxios = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiAxios })));
const SiMui = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiMui })));
const SiFramer = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiFramer })));
const BsBootstrap = React.lazy(() => import("react-icons/bs").then(mod => ({ default: mod.BsBootstrap })));
const DiJava = React.lazy(() => import("react-icons/di").then(mod => ({ default: mod.DiJava })));
const SiSpringboot = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiSpringboot })));
const DiMysql = React.lazy(() => import("react-icons/di").then(mod => ({ default: mod.DiMysql })));
const DiPhp = React.lazy(() => import("react-icons/di").then(mod => ({ default: mod.DiPhp })));
const GrGithub = React.lazy(() => import("react-icons/gr").then(mod => ({ default: mod.GrGithub })));
const DiBitbucket = React.lazy(() => import("react-icons/di").then(mod => ({ default: mod.DiBitbucket })));
const SiPostman = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiPostman })));
const DiDocker = React.lazy(() => import("react-icons/di").then(mod => ({ default: mod.DiDocker })));
const SiInsomnia = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiInsomnia })));
const SiNgrok = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiNgrok })));
const DiJenkins = React.lazy(() => import("react-icons/di").then(mod => ({ default: mod.DiJenkins })));
const SiCheckmk = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiCheckmk })));
const SiMatomo = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiMatomo })));
const SiJira = React.lazy(() => import("react-icons/si").then(mod => ({ default: mod.SiJira })));
const RiWebhookFill = React.lazy(() => import("react-icons/ri").then(mod => ({ default: mod.RiWebhookFill })));
const FcLinux = React.lazy(() => import("react-icons/fc").then(mod => ({ default: mod.FcLinux })));

const floatingVariants = (duration) => ({
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
    [RiReactjsLine, 2, "text-[#00a7e5]"],
    [RiTailwindCssFill, 2.5, "text-[#06B6D4]"],
    [SiReactrouter, 2, "text-[#D0021B]"],
    [RiNextjsLine, 2.5, "text-[#C0C0C0]"],
    [SiRedux, 2, "text-[#764abc]"],
    [SiAxios, 2.5, "text-blue-900"],
    [SiMui, 2, "text-[#2196f3]"],
    [SiFramer, 2.5, "text-blue-400"],
    [BsBootstrap, 2, "text-[#602C50]"],
    [DiJava, 2.5, "text-[#5382a1]"],
    [SiSpringboot, 2, "text-[#6DB33F]"],
    [DiMysql, 2.5, "text-blue-300"],
    [DiPhp, 2, "text-white"],
    [GrGithub, 2.5, "text-white"],
    [DiBitbucket, 2, "text-[#2684FF]"],
    [SiStrapi, 2, "text-[#4945FF] bg-white rounded-[27%]"],
    [SiPostman, 2.5, "text-[#EF5B25] bg-white rounded-[50%]"],
    [DiDocker, 2, "text-white font-bold bg-[#0db7ed] rounded-full"],
    [SiInsomnia, 2.5, "text-[#4000BF] bg-white rounded-[50%]"],
    [SiNgrok, 2.5, "text-[#ffffff]"],
    [DiJenkins, 2, ""],
    [SiCheckmk, 2.5, "text-[#15D1A0]"],
    [SiMatomo, 2, "text-[#0ea600]"],
    [SiJira, 2.5, "text-[#0146b3]"],
    [RiWebhookFill, 2, ""],
    [FcLinux, 2.5, ""]
  ];

  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center text-white my-20"
      >
        Technologies
      </motion.h2>

      <div className="flex flex-wrap lg:flex-row items-center justify-center gap-4">
        {icons.map(([Icon, duration, color], i) => (
          <Suspense key={i} fallback={<div className="p-4 w-29 h-29 bg-stone-900 rounded-full animate-pulse"></div>}>
            <motion.div
              className="p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              animate="animate"
              variants={floatingVariants(duration)}
            >
              <Icon className={`text-7xl h-29 w-29 ${color}`} />
            </motion.div>
          </Suspense>
        ))}
      </div>
    </div>
  );
}
