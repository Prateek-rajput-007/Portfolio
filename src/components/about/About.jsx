import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiFolderChartLine } from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 years Working</small>
            </article>

            <article className="about__card">
              <BsBuilding className='about__icon' />
              <h5>Internships</h5>
              <small>2+ Completed</small>
            </article>

            <article className="about__card">
              <RiFolderChartLine className='about__icon' />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>

          <p>I'm Prateek, a developer proficient in C++, JavaScript, React.js, Node.js, and MongoDB. I am certified in Data Structures and Algorithms (DSA) and the MERN stack by Code Help. My expertise extends to various aspects of web development and backend technologies.

I have a strong background in problem-solving, having solved over 600 problems on LeetCode and 700+ on GeeksforGeeks. My LeetCode contest rating of 1757 underscores my capability to tackle complex coding challenges and deliver efficient solutions.<br/>

 <b>Let's connect to build innovative solutions together!</b> </p>
          <a href="#contact" className='btn btn-primary'>Message Me</a>
        </div>

      </div>
    </section>
  )
}

export default About
