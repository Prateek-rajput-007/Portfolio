import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBookBookmark} from 'react-icons/bi';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {TbMessageCircle} from 'react-icons/tb';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#education" onClick={()=>{setActiveNav('#education')}} className={activeNav === '#education' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><TbMessageCircle/></a>
     
    </nav>
  )
}

export default Nav