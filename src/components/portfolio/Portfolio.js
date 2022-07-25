import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    title: 'This is a portfolio item title',
    image: IMG1,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
  {
    id: 2,
    title: 'This is a portfolio item title',
    image: IMG2,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
  {
    id: 3,
    title: 'This is a portfolio item title',
    image: IMG3,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
  {
    id: 4,
    title: 'This is a portfolio item title',
    image: IMG4,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
  {
    id: 5,
    title: 'This is a portfolio item title',
    image: IMG5,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
  {
    id: 6,
    title: 'This is a portfolio item title',
    image: IMG6,
    github: 'https://github.com/munnigel?tab=repositories',
    demo: 'https://munnigel.github.io/portfolio/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__article'>
              <div className='portfolio__article-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__article-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio