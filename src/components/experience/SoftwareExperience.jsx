import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const SoftwareExperience = () => {
  return (
    <section id="software-experience">
      <h5>My Professional Journey</h5>
      <h2>Software Engineering Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Software Engineer at Alternative Path</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>React Development: Developed a React-based platform to connect users and streamline workflows, improving user engagement by 30%.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>Authentication & Authorization: Implemented JWT-based authentication to secure user sessions, supporting 500+ active users daily.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>Security: Enhanced security with Bcrypt for password hashing, ensuring zero reported breaches.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>Frontend Optimization: Optimized load times by 20% using React hooks and state management.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Tech Stack Used</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>React.js</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>Node.js</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>Express.js</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>Docker</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list__icon" />
              <p>AWS</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default SoftwareExperience;