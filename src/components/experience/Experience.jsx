import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        What Skills I Have
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Experience
      </motion.h2>

      <div className="container experience__container">
        <motion.div
          className="experience__frontend"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>
          </div>
        </motion.div>

        <motion.div
          className="experience__backend"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Thunder Client</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>REST API</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Socket.io</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>
          </div>
        </motion.div>

        <motion.div
          className="experience__frontend"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>General</h3>
          <div className="experience__content">
            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Machine Learning</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>
          </div>
        </motion.div>

        <motion.div
          className="experience__backend"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Tools & Platforms</h3>
          <div className="experience__content">
            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Jira</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>

            <motion.article
              className="experience__details"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Vercel</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;