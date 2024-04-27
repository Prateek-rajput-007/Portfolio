import {React} from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Header = () => {

  const [text] = useTypewriter({
    words: ["Software Engineer" , "Front End Developer", "Back End Developer","Coder"],
                      
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 30,
    delaySpeed: 1500,

  });

  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Prateek</h1>
        <h2 className="text-4xl font-bold text-light">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#808080"
          />
        </h2>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header