import React from 'react';
import { BiCheck } from 'react-icons/bi';
import { motion } from 'framer-motion';
import './education.css';

const Education = () => {
  return (
    <section id='education'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        Education Milestones and Academic Excellence
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Education
      </motion.h2>

      <div className="container services__container">
        <motion.article
          className="service"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="service__head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3>Master of Computer Application</h3>
          </motion.div>

          <motion.ul
            className="service__list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <BiCheck className='service__list__icon' />
              <p>University School of Information, Communication and Technology, New Delhi</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <BiCheck className='service__list__icon' />
              <p>2022-2024 | Completed</p>
            </motion.li>
          </motion.ul>
        </motion.article>

        <motion.article
          className="service"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="service__head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3>Bachelor of Computer Application</h3>
          </motion.div>

          <motion.ul
            className="service__list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <BiCheck className='service__list__icon' />
              <p>Guru Gobind Singh Indraprastha University</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <BiCheck className='service__list__icon' />
              <p>2018-2021 | Completed</p>
            </motion.li>
          </motion.ul>
        </motion.article>
      </div>
    </section>
  );
};

export default Education;
