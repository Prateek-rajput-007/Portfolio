import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import './header.css'
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/prateek-rajput-449898191" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Prateek-rajput-007/" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://leetcode.com/Prateek_0007/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials