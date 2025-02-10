import React from 'react';
import './project.css';
import IMG1 from '../../assets/task.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/weather.png';
import IMG4 from '../../assets/machine.png';
import IMG5 from '../../assets/portfolio_project.png';
import IMG6 from '../../assets/football.png';
import Job from '../../assets/Job.png';
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Task Scheduler',
    github: 'https://github.com/Prateek-rajput-007/Task-Scheduler',
    demo: 'https://to-do-scheduler.netlify.app/'
  },
  {
    id: 2,
    image: Job,
    title: 'Job Seeking Application',
    github: 'https://github.com/Prateek-rajput-007/Job-Seeking-',
    demo: 'https://www.youtube.com/watch?v=C_9-729awzg'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Football Analysis Using Web Scraping',
    github: 'https://github.com/Prateek-rajput-007/Football-Analysis',
    demo: 'https://myfootballanalysis.netlify.app/'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Portfolio Website',
    github: 'https://github.com/Prateek-rajput-007/Portfolio',
    demo: 'https://github.com/Prateek-rajput-007/Machine-Learning-Projects'
  },
  {
    id: 5,
    image: IMG3,
    title: 'Weather App',
    github: 'https://github.com/Prateek-rajput-007/Machine-Learning-Projects',
    demo: 'https://weatherifyapp.netlify.app/'
  },
  {
    id: 6,
    image: IMG4,
    title: 'Machine Learning',
    github: 'https://github.com/Prateek-rajput-007/Machine-Learning-Projects',
    demo: 'https://github.com/Prateek-rajput-007/Machine-Learning-Projects'
  },
  {
    id: 7,
    image: IMG2,
    title: 'Todo Management App',
    github: 'https://github.com/Prateek-rajput-007/Todo-Management-App',
    demo: 'https://react-cool-todo-app.netlify.app/'
  }
];

const Project = () => {
  return (
    <section id='project'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.2 }}
      >
        My Recent Work
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        Project
      </motion.h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <motion.article
            key={id}
            className="portfolio__item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.2, delay: id * 0.05 }}
          >
            <motion.div
              className="portfolio__item__image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2, delay: id * 0.075 }}
            >
              <img src={image} alt={title} />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2, delay: id * 0.1 }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="portfolio__item__cta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2, delay: id * 0.125 }}
            >
              <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Project;
