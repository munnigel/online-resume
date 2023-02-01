import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'
import FP from '../../assets/FP-image.png'
import SV from '../../assets/seed-ventures.png'
import Shopee from '../../assets/shopee-logo.png'
import Sutd from '../../assets/sutd.png'
import BG from '../../assets/bg4.jpg'
import {Parallax} from 'react-parallax'

const Services = () => {
  return (
    <section id='services'>
      <Parallax bgImage={BG} strength={700}>
      <div className='top_services'>
        <h4>My experiences</h4>
        <h1>Past Internship expriences</h1>
      </div>

  
      <div className='container services__container'>

      <article className='service'>
          <div className='service__head'>
            <h3>Shopee Singapore Pte Ltd</h3>
            <h2>Frontend Developer Intern</h2>
            <img src={Shopee} alt='Shopee Logo' className='job__img'/>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Used ReactJS, FabricJS and Ant Design to build informational websites, including Shopee’s internal ticketing system.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Worked with React states, hooks and component lifecycles to manage and update application data. Implemented Redux for state management for a more efficient and maintainable code.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Migrated large amounts of data from Google Sheets to MySQL and Redis, utilizing Node.js and ExpressJS as the backend, resulting in 5x improvement in website loading speed.</p>
            </li>     

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Implemented CRUD operations on the ticketing system in the backend, and linking it to the frontend.</p>
            </li>  

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Gained strong web development principles such as HTTP requests and RESTful API design</p>
            </li>  
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Federal Packaging Industries Pte Ltd</h3>
            <h2>Software Engineer Intern</h2>
            <img src={FP} alt='FP Logo' className='job__img'/>
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

        <article className='service'>
          <div className='service__head'>
            <h3>Singapore University of Technology and Design</h3>
            <h2>Software Developer Student Researcher</h2>
            <img src={Sutd} alt='FPI Logo' className='job__img' style={{maxWidth: "120px"}}/>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Developed a data collection webpage using Angular and deployed on Python Flask.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Utilized Data Visualisation tools using Angular Materials to track students’ progress for their school projects.</p>
            </li>

            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Made use of RESTful API design to implement CRUD operations on user data.</p>
            </li>     
          </ul>
        </article>
      </div>
      </Parallax>
    </section>
  )
}

export default Services