import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
      </div>
      <p> &copy; 2024 swathisamudrala.com</p>
    </div>
  );
};

export default Footer;
