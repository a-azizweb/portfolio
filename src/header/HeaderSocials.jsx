import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

import { FaGithub } from 'react-icons/fa';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/ahmad-aziz-0a1391240"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/a-azizweb" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/ahmadaziz_2001/"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
