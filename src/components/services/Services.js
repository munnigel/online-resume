import React from 'react';
import './services.css';
import { BsCheckAll } from 'react-icons/bs';
import FP from '../../assets/FP-image.png';
import SV from '../../assets/seed-ventures.png';
import Shopee from '../../assets/shopee-logo.png';
import Sutd from '../../assets/sutd.png';
import BG from '../../assets/bg4.jpg';
import Deloitte from '../../assets/deloitte-logo.avif';
import Blockchain from '../../assets/blockchain.png';
import { Parallax } from 'react-parallax';

const experiences = [
  {
    company: "Deloitte Touche Tomatsu Ltd",
    position: "Risk Advisory, Data Analyst Intern",
    logo: Deloitte,
    tasks: [
      "Crafted an IT auditing software in two months using Python, SQL, and VBA, automating data processes and enhancing client efficiency by over 500%.",
      "Spearheaded back-end logic development with SQL and VBA for reliable test results and streamlined data management.",
      "Utilized Power BI and Tableau for impactful data visualizations.",
      "Managed client relationships, ensuring timely and quality software product delivery.",
      "Served as a Teaching Assistant for internal Data Analytics courses."
    ]
  },
  {
    company: "Web3 Software Developer",
    position: "Freelance",
    logo: Blockchain,
    tasks: [
      "Collaborated with clients including Jack Neo’s production team J Team Universe and Swiss-based company Hempbased on two distinct projects to develop informative NFT websites.",
      "Facilitated streamlined minting and blockchain integration through Solidity smart contracts.",
      "Integrated frontend with Metamask using etherJS and Alchemy library, also enabling credit card payments."
    ]
  },
  {
    company: "Shopee Singapore Pte Ltd",
    position: "Frontend Developer Intern",
    logo: Shopee,
    tasks: [
      "Used ReactJS, FabricJS and Ant Design to build informational websites, including Shopee’s internal ticketing system.",
      "Worked with React states, hooks and component lifecycles to manage and update application data. Implemented Redux for state management for a more efficient and maintainable code.",
      "Migrated large amounts of data from Google Sheets to MySQL and Redis, utilizing Node.js and ExpressJS as the backend, resulting in 5x improvement in website loading speed.",
      "Implemented CRUD operations on the ticketing system in the backend, and linking it to the frontend.",
      "Gained strong web development principles such as HTTP requests and RESTful API design"
    ]
  },
  {
    company: "Federal Packaging Industries Pte Ltd",
    position: "Software Engineer Intern",
    logo: FP,
    tasks: [
      "Managed software application installation, configuration, troubleshooting and upgrades.",
      "Prepared documentation such as user manuals and operation instructions to ensure effective use of systems.",
      "Supported the IT and Engineering manager, configured and maintained Programmable Logic Controllers and performed back-ups.",
      "Attended company-related courses in Mitsubishi, such as Ladder Diagram programming for IQ-R PLC, GOT2000 Human Machine Interface and SCADA."
    ]
  },
  {
    company: "Seed Ventures Management Pte Ltd",
    position: "Software Developer intern",
    logo: SV,
    tasks: [
      "Used JavaScript and Canvas API to generate random NFT artwork in the thousands.",
      "Used ReactJS to build informational websites for clients.",
      "Smart Contract Programming in Solidity to deploy on Ethereum blockchain."
    ]
  },
  {
    company: "Singapore University of Technology and Design",
    position: "Software Developer Student Researcher",
    logo: Sutd,
    tasks: [
      "Developed a data collection webpage using Angular and deployed on Python Flask.",
      "Utilized Data Visualisation tools using Angular Materials to track students’ progress for their school projects.",
      "Made use of RESTful API design to implement CRUD operations on user data."
    ]
  }
];

const Services = () => {
  return (
    <section id='services'>
      <Parallax bgImage={BG} strength={700}>
        <div className='top_services'>
          <h4>My experiences</h4>
          <h1>Past Internship experiences</h1>
        </div>

        <div className='container services__container'>
          {experiences.map((experience) => (
            <article className='service' key={experience.company}>
              <div className='service__head'>
                <h3>{experience.company}</h3>
                <h2>{experience.position}</h2>
                <img src={experience.logo} alt={`${experience.company} Logo`} className='job__img' />
              </div>

              <ul className='service__list'>
                {experience.tasks.map((task, index) => (
                  <li key={index}>
                    <BsCheckAll className='service__list-icon' />
                    <p>{task}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Parallax>
    </section>
  );
};

export default Services;
