import React from 'react'
import './about.css'
import ME from '../../assets/nigel-face.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import BG from '../../assets/bg2.jpg';
import {Parallax} from 'react-parallax';

const About = () => {
  return (
    <section id='about'>
      <div className='top'>
        <h4>Get to know</h4>
        <h1>About me</h1>
      </div>
      <Parallax bgImage={BG} strength={700}>
      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <a href='#services'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>CODING EXPERIENCE</h5>
                <small>3 Years</small>
              </article>
            </a>

            <a href='#services'>
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>CLIENTS</h5>
                <small>
                  <ul>
                    <li>Academy Award Winner Nickson Fong</li><br></br>
                    <li>Founder of LIV3LY Jeffrey Foo</li>
                  </ul>
                  </small>
              </article>
            </a>

            <a href='#services'>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>PROJECTS</h5>
                <small>6 school projects, 3 internship projects</small>
              </article>
            </a>

          </div>
          <p> Hi everyone, I am Nigel Mun, a 3rd year student studying Computer Science and Design in the Singapore University of Technology and Design (SUTD). I value aesthetic designs, and I am all-in on web development. </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
      </Parallax>

    </section>
  )
}

export default About