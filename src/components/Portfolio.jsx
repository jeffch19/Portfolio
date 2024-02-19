// Portfolio.js
import React from 'react';
import './Portfolio.css';
import project1 from '../assets/portfolioimg1.jpg';
import imgGit from '../assets/github.jpg';
// import project2 from '../assets/project2.jpg';
// import project3 from '../assets/project3.jpg';
// import project4 from '../assets/project4.jpg';
// import project5 from '../assets/project5.jpg';
// import project6 from '../assets/project6.jpg';

const Portfolio = () => {
    const projects = [
        {
          title: 'Project  1',
          description: 'Description for Project  1',
          image: project1,
          deployedLink: 'https://project1.com',
          githubLink: 'https://github.com/user/project1'
        },
        {
            title: 'Project  1',
            description: 'Description for Project  1',
            image: project1,
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1'
          },
          {
            title: 'Project  1',
            description: 'Description for Project  1',
            image: project1,
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1'
          },
          {
            title: 'Project  1',
            description: 'Description for Project  1',
            image: project1,
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1'
          },
          {
            title: 'Project  1',
            description: 'Description for Project  1',
            image: project1,
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1'
          },
          {
            title: 'Project  1',
            description: 'Description for Project  1',
            image: project1,
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1'
          },
        // ... Add more projects here
      ];
      return (
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <div className="portfolio-links">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><img src={imgGit} alt="GitHub" className="footer-image" /></a>
              </div>
            </div>
          ))}
        </div>
      )
};

export default Portfolio;