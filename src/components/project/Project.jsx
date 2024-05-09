import React from 'react'
import './project.css'
import IMG1 from '../../assets/task.png'
import IMG2 from '../../assets/todo.png'
import IMG3 from '../../assets/weather.png'
import IMG4 from '../../assets/machine.png'
import IMG5 from '../../assets/portfolio_project.png'
import IMG6 from '../../assets/football.png'

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
    image: IMG2,
    title: 'Todo Management App',
    github: 'https://github.com/Prateek-rajput-007/Todo-Management-App',
    demo: 'https://react-cool-todo-app.netlify.app/'
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
    github: 'https://github.com/Prateek-rajput-007/Portfolio-Website',
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
  }


]
const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={image} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__cta">
                  <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                  <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }




      </div>
    </section>
  )
}

export default Project
