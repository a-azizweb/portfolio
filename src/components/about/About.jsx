import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>MERN Stack</h5>
              <small>Web Developer</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>BS(CS)</small>
            </article>
          </div>

          <p>
            Hello, my name is Ahmad Aziz and I am a MERN Stack developer. I have
            1.5+ years of experience in building Full Stack websites, and I am
            skilled in REACT JS, NEXT JS, NODE JS, EXPRESS JS.... I am a
            dedicated and hard-working individual, with a passion for delivering
            quality work. I am doing my Bachelor's in Computer Sciences(last
            semester) having CGPA of 3.5. I am excited to continue growing and
            developing my skills in the field, and I am always looking for new
            opportunities to learn and grow.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
