import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/disney.PNG'
import IMG2 from '../../assets/COVID.png'
import IMG3 from '../../assets/android.PNG'
import IMG4 from '../../assets/ruby.PNG'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import BG from '../../assets/bg5.jpg'
import { Parallax } from 'react-parallax'


const data = [
  {
    id: 1,
    title: 'Disney+ clone website',
    desc1: 'Built a functional, responsive Disney+ website with react on Mobile, Desktop and Tablet.',
    desc2: 'Used Styled Components and CSS for website design, and utilized Redux as data layer for data access.',
    desc3: 'Implemented login system to allow for CRUD operations on user list and validation in Firebase, and deployed Firebase as a backend hosting service.',
    image: IMG1,
    github: 'https://github.com/munnigel/Disney-clone-website',
    demo: 'https://disney-clone-website.web.app/home'
  },
  {
    id: 2,
    title: 'Machine Learning predictive model on COVID-19 data',
    desc1:'Predicted number of new COVID deaths using real data by training multiple linear regression models.',
    desc2:'Using Python to code out the cost function and gradient descent and evaluated the model using key metrics such as mean squared error and r-squared value.',
    desc3:'',
    image: IMG2,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
  {
    id: 3,
    title: 'CV, NLP and analytics web dashboard',
    desc1:'Built a functional, responsive web dashboard to analyze and visualize data from a CV, NLP and analytics project from microservices in Java and on the Google Cloud Platform',
    desc2:'Frontend is developed in Angular, and backend is developed in Ruby on Rails. Used PostgreSQL as a database.',
    desc3:'Deployed on Google Cloud Platform.',
    image: IMG4,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
  {
    id: 4,
    title: 'Android App in Google Development Hackfest 2022',
    desc1:'Made a Java App in Android Studio, aiming to solve one of the 17 United Nations Sustainable Development Goals.',
    desc2:'Built a functional and responsive Android app that employs a Tinder-style card-view UI for job searching, allowing better communication between the hirer and job searcher.',
    desc3:'Deployed Firebase as a backend hosting service.',
    image: IMG3,
    github: 'https://github.com/munnigel/Hackathon-android-app',
    demo: 'https://munnigel.github.io/portfolio/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_top'>
        <h4>My recent work</h4>
        <h1>Portfolio</h1>
      </div>
      <Parallax bgImage={BG} strength={700}>
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
                <a href={github} className='btn' target='_blank'>Github</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
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