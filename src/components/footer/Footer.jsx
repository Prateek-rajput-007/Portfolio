import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {


  return (
    <footer>
      <a href="#" className='footer__logo'>Prateek</a>

      <ul className="permalinks">
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#project">Project</a> </li>
        <li> <a href="#education">Education</a> </li>
        {/* <li> <a href="#testimonials">Testimonials</a> </li> */}
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Prateek-rajput-007/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/prateek-rajput-449898191" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://leetcode.com/Prateek_0007/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/user/prateekrajput47/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks/></a>
      </div>

      {/* <div className="footer__number__of__visitors" id="count">
        <h3>Number of visitors: {count}</h3>
      </div> */}

      <div className="footer__copywright">
        <small>&copy; Prateek. All Rights Reserved.</small>
      </div>
    </footer>
  )

}

export default Footer