import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
      >
        <BiBook />
      </a>

      <a
        href="#portfolio"
        className={activeNav === '#portfolio' ? 'active' : ''}
        onClick={() => setActiveNav('#portfolio')}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
