import React, {Component} from 'react'
import './portfolio.css'
import IMG1 from '../../assets/disney.jpg'
import IMG2 from '../../assets/COVID.jpg'
import IMG3 from '../../assets/android.jpg'
import IMG4 from '../../assets/ruby.jpg'
import IMG5 from '../../assets/IMG4.jpg'
import IMG6 from '../../assets/JTeam.jpg'
import IMG7 from '../../assets/Transaction.JPG'
import BG from '../../assets/bg5.jpg'
import { Parallax } from 'react-parallax'


const data = [

  {
    id: 1,
    title: 'Creating, updating and deleting data using React and Redux',
    desc1:'Built a functional, responsive Bookslist app, able to do CRUD operations with React and Redux',
    desc2:'Used Styled Components and CSS for website design, and utilized Redux as data layer for data access.',
    desc3:'Deployed on Heroku as hosting service.',
    image: IMG5,
    github: 'https://github.com/munnigel/React-Redux-CRUD-booklist',
    demo: 'https://react-crud-booklist.web.app/'
  },
  {
    id: 2,
    title: 'J Team Universe NFT website',
    desc1:'Worked on a project by Jack Neo, to build an informative NFT website using ReactJS and deployed on Firebase.',
    desc2:'The page was designed to display information about his various famous movies, “Ah Boys to Men” and “Ah Girls Go Army” NFT, including images and metadata.',
    desc3:'Made use of many design libraries such as Ant Design, Bootstrap, and Parallax Scrolling to produce a visually appealing website. Deployed Firebase as hosting service.',
    image: IMG6,
    demo: 'https://j-team-universe.web.app/'
  },

  {
    id: 3,
    title: 'Transactions app in TikTok Hackathon 2023',
    desc1: 'Utilized Bubble for intuitive frontend development, ensuring seamless user experiences and aesthetic appeal. Incorporated FastAPI for backend development, optimizing performance and scalability.',
    desc2: 'Implemented JWT and password encryption techniques to ensure stringent authentication and authorization processes, and integrated PayPal for secure deposit and withdrawal functionalities.',
    desc3: 'Ensured app security by integrating protected routes that verified JWT tokens post user login, bolstering overall data protection and user trust.',
    image: IMG7,
    demo: 'https://e-wallet-94178.bubbleapps.io/version-test'
  },


  {
    id: 4,
    title: 'Disney+ clone website',
    desc1: 'Built a functional, responsive Disney+ website with react on Mobile, Desktop and Tablet.',
    desc2: 'Used Styled Components and CSS for website design, and utilized Redux as data layer for data access.',
    desc3: 'Implemented login system to allow for CRUD operations on user list and validation in Firebase, and deployed Firebase as a backend hosting service.',
    image: IMG1,
    github: 'https://github.com/munnigel/Disney-clone-website',
    demo: 'https://disney-clone-website.web.app/home'
  },


  {
    id: 5,
    title: 'CV, NLP and analytics web dashboard',
    desc1:'Built a functional, responsive web dashboard to analyze and visualize data from a CV, NLP and analytics project from microservices in Java and on the Google Cloud Platform',
    desc2:'Frontend is developed in Angular, and backend is developed in Ruby on Rails. Used PostgreSQL as a database.',
    desc3:'Deployed on Google Cloud Platform.',
    image: IMG4,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://rubyduckies-angular-frontend-wmma3ffcjq-as.a.run.app/'
  },
  {
    id: 6,
    title: 'Android App in Google Development Hackfest 2022',
    desc1:'Made a Java App in Android Studio, aiming to solve one of the 17 United Nations Sustainable Development Goals.',
    desc2:'Built a functional and responsive Android app that employs a Tinder-style card-view UI for job searching, allowing better communication between the hirer and job searcher.',
    desc3:'Deployed Firebase as a backend hosting service.',
    image: IMG3,
    github: 'https://github.com/munnigel/Hackathon-android-app',
    demo: ''
  },


  {
    id: 7,
    title: 'Machine Learning predictive model on COVID-19 data',
    desc1:'Predicted number of new COVID deaths using real data by training multiple linear regression models.',
    desc2:'Using Python to code out the cost function and gradient descent and evaluated the model using key metrics such as mean squared error and r-squared value.',
    desc3:'',
    image: IMG2,
    github: '',
    demo: ''
  },

];





const Portfolio = () => {


  return (
    <section id='portfolio'>
      <Parallax bgImage={BG} strength={700}>
      <div className='portfolio_top'>
        <h4>My recent work</h4>
        <h1>Portfolio</h1>
      </div>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo, desc1, desc2, desc3}) => {
            return (
              <article key={id} className='portfolio__article'>
              <div className='portfolio__article-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <ul className='portfolio__list'>
                <li>{desc1}</li>
                <li>{desc2}</li>
                <li>{desc3}</li>
              </ul>
              <div className='portfolio__article-cta'>
                {github? 
                <a href={github} className='btn' target='_blank'>Github</a> : null}
                {demo?
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> : null}

              </div>
              </article>
            )
          })
        }
      </div>
      </Parallax>
    </section>
  )
}

export default Portfolio