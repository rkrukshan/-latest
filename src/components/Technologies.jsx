import { motion } from "framer-motion";
import React, { Suspense, useEffect } from "react";
import lazyWithPreload from "react-lazy-with-preload";
import { SiSentry, SiStrapi } from "react-icons/si";

// ✅ Preload-enabled lazy icons
const RiReactjsLine = lazyWithPreload(() => import("react-icons/ri").then(m => ({ default: m.RiReactjsLine })));
const RiTailwindCssFill = lazyWithPreload(() => import("react-icons/ri").then(m => ({ default: m.RiTailwindCssFill })));
const SiReactrouter = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiReactrouter })));
const RiNextjsLine = lazyWithPreload(() => import("react-icons/ri").then(m => ({ default: m.RiNextjsLine })));
const SiRedux = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiRedux })));
const SiAxios = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiAxios })));
const SiMui = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiMui })));
const SiFramer = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiFramer })));
const BsBootstrap = lazyWithPreload(() => import("react-icons/bs").then(m => ({ default: m.BsBootstrap })));
const DiJava = lazyWithPreload(() => import("react-icons/di").then(m => ({ default: m.DiJava })));
const SiSpringboot = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiSpringboot })));
const DiMysql = lazyWithPreload(() => import("react-icons/di").then(m => ({ default: m.DiMysql })));
const DiPhp = lazyWithPreload(() => import("react-icons/di").then(m => ({ default: m.DiPhp })));
const GrGithub = lazyWithPreload(() => import("react-icons/gr").then(m => ({ default: m.GrGithub })));
const DiBitbucket = lazyWithPreload(() => import("react-icons/di").then(m => ({ default: m.DiBitbucket })));
const SiPostman = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiPostman })));
const DiDocker = lazyWithPreload(() => import("react-icons/di").then(m => ({ default: m.DiDocker })));
const SiInsomnia = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiInsomnia })));
const SiNgrok = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiNgrok })));
const DiJenkins = lazyWithPreload(() => import("react-icons/di").then(m => ({ default: m.DiJenkins })));
const SiCheckmk = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiCheckmk })));
const SiMatomo = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiMatomo })));
const SiJira = lazyWithPreload(() => import("react-icons/si").then(m => ({ default: m.SiJira })));
const RiWebhookFill = lazyWithPreload(() => import("react-icons/ri").then(m => ({ default: m.RiWebhookFill })));
const FcLinux = lazyWithPreload(() => import("react-icons/fc").then(m => ({ default: m.FcLinux })));

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

  // ✅ Preload all icons in background after first paint
  useEffect(() => {
    requestIdleCallback(() => {
      [
        RiReactjsLine, RiTailwindCssFill, SiReactrouter, RiNextjsLine, SiRedux,
        SiAxios, SiMui, SiFramer, BsBootstrap, DiJava, SiSpringboot, DiMysql,
        DiPhp, GrGithub, DiBitbucket, SiPostman, DiDocker, SiInsomnia, SiNgrok,
        DiJenkins, SiCheckmk, SiMatomo, SiJira, RiWebhookFill, FcLinux
      ].forEach(icon => icon.preload());
    });
  }, []);

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
    [SiSentry, 2, "text-[#003DA5] bg-white rounded-[27%]"],
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
        <Suspense fallback={null}>
          {icons.map(([Icon, duration, color], i) => (
            <motion.div
              key={i}
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
          ))}
        </Suspense>
      </div>
    </div>
  );
}
