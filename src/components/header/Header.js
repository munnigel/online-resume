import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ReadyPlayerMe-Avatar.png'
import HeaderSocials from './HeaderSocials'
import { Parallax } from 'react-parallax'
import BG from '../../assets/bg1.jpg'

const Header = () => {
  return (
    <Parallax bgImage={BG} strength={800}>
    <header>
      <div className='container header__container'>
      <h4>Hello I'm</h4>
      <h1><b>Nigel Mun</b></h1>
      <h5 className='text-light'>Software Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt="Picture of Nigel" />
      </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>

    </header>
    </Parallax>

    
  )
}

export default Header