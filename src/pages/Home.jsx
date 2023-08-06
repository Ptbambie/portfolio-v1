import React from 'react';
import Presentation from '../components/Presentation';
import Banniere from '../components/Banniere';
import './home.css';

const Home = () => {
  return (
    <div className='content-home'>
      <Presentation/>
      <Banniere />
    </div>
  )
}

export default Home