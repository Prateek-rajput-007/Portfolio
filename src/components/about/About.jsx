import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import { RiFolderChartLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Get To Know
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <div className="container about__container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="about__cards">
            <motion.article
              className="about__card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year Working</small>
            </motion.article>

            <motion.article
              className="about__card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BsBuilding className='about__icon' />
              <h5>Internships</h5>
              <small>2+ Completed</small>
            </motion.article>

            <motion.article
              className="about__card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <RiFolderChartLine className='about__icon' />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </motion.article>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            I'm Prateek, a developer proficient in C++, JavaScript, React.js, Node.js, and MongoDB. I am certified in Data Structures and Algorithms (DSA) and the MERN stack by Code Help. My expertise extends to various aspects of web development and backend technologies.

            I have a strong background in problem-solving, having solved over 600 problems on LeetCode and 700+ on GeeksforGeeks. My LeetCode contest rating of 1757 underscores my capability to tackle complex coding challenges and deliver efficient solutions.<br/>

            <b>Let's connect to build innovative solutions together!</b>
          </motion.p>
          <motion.a
            href="#contact"
            className='btn btn-primary'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Message Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
