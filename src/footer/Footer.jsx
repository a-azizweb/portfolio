import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ahmad Aziz
      </a>

      <ul className="parmalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://web.facebook.com/people/Ahmad-Aziz/100016626789190/"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/ahmadaziz_2001/"
          rel="noreferrer"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/ahmadazizhaider"
          rel="noreferrer"
          target="_blank"
        >
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
