import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './education.css'

const Education = () => {
  return (
     <section id='education'>
      <h5>Education Milestones and Academic Excellence</h5>
      <h2>Education</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Master of Computer Application</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list__icon' />
              <p>University School of Information, Communication and Technology, New Delhi</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>2022-2024 | Completed</p>
            </li>

          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Bachelor of Computer Application</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className='service__list__icon' />
              <p>Guru Gobind Singh Indraprastha University</p>
            </li>

            <li>
              <BiCheck className='service__list__icon' />
              <p>2018-2021 | Completed</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Education
