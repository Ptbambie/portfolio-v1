import React from 'react';
import { Link } from 'react-router-dom'; 
import profil from '../assets/profil.jpg';
import { FiArrowRight } from "react-icons/fi";
import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import AudreyALAIME from "../assets/AudreyALAIME.pdf";
import './presentation.css';

const Presentation = () => {
  return (
    <div className='presentation-content'>
      <div className='presentation-home'>
        <h1>
          Développeuse web et graphiste
        </h1>
        <p>
        "Initialement formée en graphisme et webdesign pendant 5 ans, j'ai travaillé pendant 12 ans en tant qu'assistante dentaire.<br/><br/> Au cours de cette période, j'ai développé des compétences précieuses telles que l'écoute, l'organisation et la rigueur, ce qui m'a permis de mieux comprendre les enjeux auxquels les entreprises sont confrontées.<br/>
        Par la suite, j'ai entrepris une reconversion dans les langages de programmation front-end et back-end pour faire du développement web mon cœur de métier. Cette transition m'a fait découvrir un réel plaisir dans la programmation de sites web, qui s'est ajouté à mon goût prononcé pour le webdesign. <br/> <br/> Aujourd'hui, je suis épanouie en exerçant un métier que j'aime.
        Grâce à mes compétences en webdesign, je peux créer des interfaces attrayantes, tandis que ma maîtrise des langages de programmation me permet de concevoir des sites web fonctionnels."
        </p>
        <Link to="/contact" className='presentation-button'>
          Contact <FiArrowRight className="login-arrow-right" />
        </Link>
        <a className="presentation-cv" href={AudreyALAIME} target="_blank" rel="noopener noreferrer">
          Télécharger mon CV <FiArrowRight className="login-arrow-right" />
        </a>
      </div>
      <div className='presentationImg-home'>
        <img src={profil} alt='profil' />
      </div>
      {/* Affichage du PDF avec react-pdf */}
      <div className="pdf-viewer-container">
        <PDFViewer>
          <Document file={AudreyALAIME}>
            <Page pageNumber={1} />
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

export default Presentation;
