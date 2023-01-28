import React from 'react';
import CV from '../assets/Ahmad-Aziz-CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} dounload className="btn">
        Dounload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
