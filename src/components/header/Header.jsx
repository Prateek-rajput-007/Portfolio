import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Front End Developer", "Back End Developer", "Coder"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <header>
      <div className="container header__container">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          Hello I'm
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Prateek
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold text-light"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#808080" />
        </motion.h2>
        <CTA />
        <HeaderSocials />
        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src={ME} alt="me" />
        </motion.div>
        <motion.a
          href="#contact"
          className="scroll__down"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  );
};

export default Header;