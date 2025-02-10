import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./experience.css";

const SoftwareExperience = () => {
  return (
    <section id="software-experience">
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        My Professional Journey
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Software Engineering Experience
      </motion.h2>

      <div className="container services__container">
        <motion.article
          className="service"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="service__head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3>Software Engineer at Alternative Path</h3>
          </motion.div>

          <motion.ul
            className="service__list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>React Development: Developed a React-based platform to connect users and streamline workflows, improving user engagement by 30%.</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>Authentication & Authorization: Implemented JWT-based authentication to secure user sessions, supporting 500+ active users daily.</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>Security: Enhanced security with Bcrypt for password hashing, ensuring zero reported breaches.</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>Frontend Optimization: Optimized load times by 20% using React hooks and state management.</p>
            </motion.li>
          </motion.ul>
        </motion.article>

        <motion.article
          className="service"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="service__head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3>Tech Stack Used</h3>
          </motion.div>

          <motion.ul
            className="service__list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>React.js</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>Node.js</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>Express.js</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>Docker</p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <BsPatchCheckFill className="service__list__icon" />
              <p>AWS</p>
            </motion.li>
          </motion.ul>
        </motion.article>
      </div>
    </section>
  );
};

export default SoftwareExperience;