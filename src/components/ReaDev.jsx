import React from 'react';
import TripPlanner from '../assets/TripPlanner.png';
import LabelMarne from '../assets/LabelMarne.png';
import Appolo from '../assets/Appolo.png';
import './reaDev.css'

const projects = [
  {
    name: 'Planificateur de voyage',
    description: 'Hackathon: 24h / équipe de 2, React / Node.js',
    imageSrc: TripPlanner,
    websiteUrl: 'https://tripplanner-mocha.vercel.app/'
  },
  {
    name: 'Appolo',
    description: 'Projet d\'équipe de 4 personnes, React / three.js',
    imageSrc: Appolo,
    websiteUrl: 'https://apollo.martinnoel.fr/'
  },
  {
    name: 'Label Marne',
    description: 'Projet d\'équipe de 2 personnes, React / Node.js / Express / SQL',
    imageSrc: LabelMarne,
    websiteUrl: 'https://adt.btz-dev.fr/'
  }
];

const ReaDev = () => {
  return (
    <div>
      <div className='dev-intro'>
        <h1>Les sites web</h1>
        <ul className='project-list'>
          {projects.map((project, index) => (
            <li key={index} className='project-item'>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.websiteUrl} target='_blank' rel='noopener noreferrer'>
                <img src={project.imageSrc} alt={project.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReaDev;
