import React from 'react'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram , AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2023 Your Website. All rights reserved.</p>
      <p>
        Designed and developed by <a href='https://example.com'>Audrey ALAIME</a>
      </p>
      <div className='footer-links'>
      <a href='https://lien-facebook.com'><BiLogoFacebookCircle /></a>
        <a href='https://www.instagram.com/graphiquediffusion/'><AiFillInstagram /></a>
        <a href='https://github.com/Ptbambie'><AiFillGithub /></a>
        <a href='https://www.linkedin.com/in/audrey-alaime-330540255/'><AiFillLinkedin /></a>      </div>
    </div>
  );
}

export default Footer;