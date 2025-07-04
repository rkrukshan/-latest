import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/RK.png";
import {
  FaFacebook,
  FaGit,
  FaLinkedin,
  FaMediumM,
  FaWhatsapp,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const spinVariant = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <Link to="/">
          <img src={logo} alt="" className="h-25 w-25 mx-2" />
        </Link>
      </div>
      <div className="m-8 flex md:flex-row  items-center justify-center gap-5 text-2xl">
        <motion.a
          variants={spinVariant}
          animate="animate"
          href="http://www.linkedin.com/in/rukmanghan-selvakumar"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          variants={spinVariant}
          animate="animate"
          href="https://github.com/rkrukshan"
          target="blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          variants={spinVariant}
          animate="animate"
          href="https://medium.com/@rukshan1122"
          target="blank"
          rel="noopener noreferrer"
          aria-label="medium"
        >
          <FaMediumM />
        </motion.a>

        <motion.a
          variants={spinVariant}
          animate="animate"
          href="https://web.facebook.com/Ruckshan.Rukmanghan/"
          target="blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <FaFacebook />
        </motion.a>
      </div>
    </nav>
  );
}
