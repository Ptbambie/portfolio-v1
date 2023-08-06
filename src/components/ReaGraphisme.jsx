import React, { useState } from 'react';
import bonneFee from '../assets/bonne fee.jpg';
import chat from '../assets/chat.jpg';
import lapin from '../assets/lapin.jpg';
import newyork from '../assets/illustrationnewyork.png';
import './reaGraphisme.css';

const ReaGraphisme = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = [bonneFee, chat, lapin, newyork];

  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentImgIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


    return (
    <div className='rea-graphisme'>
          <div className='illustration'>
        <h1>Illustrations</h1>
        <div className='illu-img'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt='illustration'
              className='illus-image'
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>  

      {isModalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content'>
            <img src={images[currentImgIndex]} alt='illustration' className='modal-img' />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReaGraphisme;