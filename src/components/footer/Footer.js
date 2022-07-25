import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Nigel</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className='footer__social'>
        <a href='https://github.com/munnigel' className='footer__social-icon'></a>
        <a href='https://github.com/munnigel' className='footer__social-icon'></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Nigel Mun. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer