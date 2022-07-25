import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/nigel-face-2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Nigel Mun</h1>
      <h5 className='text-light'>Web Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt="Picture of Nigel" />
      </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header