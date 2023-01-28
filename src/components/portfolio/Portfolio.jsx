import React from 'react';
import './Portfolio.css';
import ProjectImage from '../../assets/project.jpg';
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: ProjectImage,
      title: 'MERN Stack Ecommerce Website',
      github: 'https://github.com/a-azizweb/mern-ecommerce',
      demo: 'https://ecommerce-0rgq.onrender.com/',
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* will add these projects to an array and map here later */}

        {data.map((item) => (
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="Project1" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
