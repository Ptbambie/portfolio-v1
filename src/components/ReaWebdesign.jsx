import React, { useState } from 'react';
import './reaWebdesign.css';
import Carat from '../assets/CaratV1.png';
import CaratV2 from '../assets/CaratV2.png';
import CaratV3 from '../assets/Carat-V3.png';
import CaratV4 from '../assets/CaratHome.jpg'
import CraieDesign from '../assets/Craiedesign1.png';
import CraieDesign2 from '../assets/Craiedesign2.png';
import CraieDesign3 from '../assets/CraiedesignConnect.png';
import CraieDesign4 from '../assets/CraiedesignForm.png';
import Norstone from '../assets/NortStone1.png';
import Norstone2 from '../assets/NortStone2.png';
import Norstone3 from '../assets/NORSTONE-STYLE-F.jpg';
import Norstone4 from '../assets/NORSTONE-STYLE-E.jpg';
import Norstone5 from '../assets/NORSTONE-STYLE-D1.jpg';
import StandFord from '../assets/StandFord.png';
import StandFord2 from '../assets/Standford.jpg';

const projects = [
    {
      title: 'Carat',
      images: [Carat, CaratV2, CaratV3, CaratV4],
      description: 'Une entreprise de bijoux de luxe, a exceptionnellement créé une gamme de matériel Hi-Fi haut de gamme. Dans le cadre de cette occasion, j\'ai conçu la maquette web pour leur projet.'
    },
    {
      title: 'CraieDesign',
      images: [CraieDesign, CraieDesign2, CraieDesign3, CraieDesign4],
      description: 'Entreprise spécialisée dans le mobilier ergonomique et technologique, j\'ai pu créer leur maquette web.'
    },
    {
      title: 'NorStone',
      images: [Norstone, Norstone2, Norstone3, Norstone4, Norstone5],
      description: 'Spécialiste du meuble hi-fi, meuble audiovisuel, câbles audio et vidéo, supports TV et accessoires audio-vidéo.'
    },
    {
      title: 'Stanford',
      images: [StandFord, StandFord2],
      description: 'Marque de bijoux, création d\'une page web'
    },
  ];
  
  const ReaWebdesign = () => {
    const [modalImages, setModalImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleCardClick = (images) => {
      setModalImages(images);
      setCurrentImageIndex(0);
    };
  
    const handleModalClose = () => {
      setModalImages([]);
      setCurrentImageIndex(0);
    };
  
    const handlePrevImage = (event) => {
      event.stopPropagation();
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextImage = (event) => {
      event.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
    };
  
    return (
      <div>
        <h1 className='Title'>Webdesign</h1>
        <div className='contentWebdesign'>
          {projects.map((project) => (
            <div className='card-webdedign' key={project.title}>
              <a href='#' onClick={() => handleCardClick(project.images)}>
                <h2>{project.title}</h2>
                <div className='card-webdedign__img'>
                  <img src={project.images[0]} alt={`webdesign-${project.title}`} />
                </div>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
  
        {modalImages.length > 0 && (
          <div className='modal' onClick={handleModalClose}>
            <div className='modal-content'>
              <span className='close'>&times;</span>
              <div className='modal-image-container'>
                <img
                  src={modalImages[currentImageIndex]}
                  alt='modal-image'
                  className='modal-image'
                />
                <button className='prev-button' onClick={handlePrevImage}>
                  &lt;
                </button>
                <button className='next-button' onClick={handleNextImage}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default ReaWebdesign;
