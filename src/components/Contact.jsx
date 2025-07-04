import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export default function Contact() {
  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.1 },
    },
  };

const textVariants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut", delay: 0.1 },
    },
  };


  const textVariants2 = {
    hidden: { opacity: 0.25, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
    },
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl text-white"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tight">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "20%" }}
          variants={textVariants}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "20%" }}
          variants={textVariants1}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "20%" }}
          variants={textVariants2}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
      </div>
    </div>
  );
}
