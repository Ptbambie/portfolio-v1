import React from 'react';
import Banniere from '../assets/DeveloppeurWeb-bann.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src = {Banniere} alt='banniere' className='bann-img'/></Link>
    </div>
  )
}

export default Header 