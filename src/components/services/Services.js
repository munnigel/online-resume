import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'
import FP from '../../assets/FP-image.png'
import SV from '../../assets/seed-ventures.png'

const Services = () => {
  return (
    <section id='services'>
      <h5>My experiences</h5>
      <h2>Past Internship expriences</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Federal Packaging Industries Pte Ltd</h3>
            <h2>Software Engineer Intern</h2>
            <img src={FP} alt='FPI Logo' className='job__img'/>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Managed software application installation, configuration, troubleshooting and upgrades.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Prepared documentation such as user manuals and operation instructions to ensure effective use of systems.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Supported the IT and Engineering manager, configured and maintained Programmable Logic Controllers and performed back-ups.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Attended company-related courses in Mitsubishi, such as Ladder Diagram programming for IQ-R PLC, GOT2000 Human Machine Interface and SCADA.</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Seed Ventures Management Pte Ltd</h3>
            <h2>Software Developer intern</h2>
            <img src={SV} alt='FPI Logo' className='job__img'/>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Used JavaScript and Canvas API to generate random NFT artwork in the thousands.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Used ReactJS to build informational websites for clients.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Smart Contract Programming in Solidity to deploy on Ethereum blockchain.</p>
            </li>     
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services