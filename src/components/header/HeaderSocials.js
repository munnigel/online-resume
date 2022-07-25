import React from 'react'
import { IconContext } from 'react-icons'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <IconContext.Provider value={{ size: '2rem' }}>
        <a href='https://www.linkedin.com/in/nigel-mun-25771a239/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/munnigel' target="_blank" ><FaGithub /></a>
      </IconContext.Provider>
    </div>
  )
}

export default HeaderSocials