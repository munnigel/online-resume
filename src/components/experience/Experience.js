import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import BG from '../../assets/bg3.jpg';
import { Parallax } from 'react-parallax';

const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "JavaScript", level: "Experienced" },
      { name: "ReactJS", level: "Experienced" },
      { name: "Angular", level: "Experienced" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "NodeJS", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "FastAPI", level: "Basic" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Spring Boot", level: "Basic" },
      { name: "Redis", level: "Basic" },
      { name: "Django", level: "Basic" },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "React-Native", level: "Intermediate" },
      { name: "Arduino", level: "Basic" },
      { name: "Java", level: "Intermediate" },
      { name: "VBA", level: "Basic" },
      { name: "Power BI", level: "Intermediate" },
      { name: "Tableau", level: "Intermediate" },
    ],
  },
];

const Experience = () => {
  return (
    <section id='experience'>
      <Parallax bgImage={BG} strength={750}>
        <div className='top_experience'>
          <h1>The skills I have</h1>
        </div>

        <div className='container experience__container'>
          {skills.map((skillCategory) => (
            <div className={`experience__${skillCategory.category.toLowerCase().replace(/ /g, '_')}`} key={skillCategory.category}>
              <h3>{skillCategory.category}</h3>
              <div className='experience__content'>
                {skillCategory.skills.map((skill) => (
                  <article className='experience__details' key={skill.name}>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{skill.name}</h4>
                      <small className='text-light'>{skill.level}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Parallax>
    </section>
  );
};

export default Experience;
