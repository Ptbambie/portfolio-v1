import React from 'react';
import ReaGraphisme from '../components/ReaGraphisme';
import ReaWebdesign from '../components/ReaWebdesign';
import { TfiVector } from 'react-icons/tfi';
import './graphisme.css';

const Graphisme = () => {
  return (
    <div className='content-graphisme'>
      <div className='graphisme-intro'>
        <h1>Le graphisme</h1>
        <div className='graphisme-content'>
          <div className='text-container'>
            <p>
              Je suis une graphiste webdesigner, avec quatre années d'études dédiées au design, ainsi qu'une année complémentaire spécifiquement axée sur le webdesign. Cette formation approfondie m'a permis de développer une culture visuelle dans se domaine.
              <br /><br />
              Mon objectif est de donner vie à des concepts créatifs en combinant harmonieusement l'esthétique et la fonctionnalité. Grâce à mon expérience variée, j'ai acquis une compréhension approfondie des tendances actuelles du web et des meilleures pratiques en matière de design interactif. Chaque projet que j'entreprends est une opportunité de créer des expériences uniques. J'aborde chaque défi avec passion et une attention minutieuse aux détails.
              <br /><br />
              Parcourez mon portfolio pour découvrir une sélection de projets qui témoignent de ma créativité.
            </p>
          </div>
          <div className='icon-container'>
            <TfiVector className='graphisme-icon' />
          </div>
        </div>
      </div>
      <ReaWebdesign />
      <ReaGraphisme />
    </div>
  );
}

export default Graphisme;
