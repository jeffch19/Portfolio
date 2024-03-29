// Portfolio.js
import React from 'react';
import './Portfolio.css';
import project1 from '../assets/portfolioimg1.jpg';
import imgGit from '../assets/github.jpg';
import weather1 from '../assets/weather1.jpg';
import note1 from '../assets/note1.jpg';
import garden1 from '../assets/garden1.jpg';
import network1 from '../assets/network1.jpg';
import employee1 from '../assets/employee1.jpg';


const Portfolio = () => {
    const projects = [
        {
          title: 'Weather Dashboard',
          description: 'Server-Side API',
          image: weather1,
          deployedLink: 'https://jeffch19.github.io/Weather-Dashboard/',
          githubLink: 'https://github.com/jeffch19/Weather-Dashboard?tab=readme-ov-file'
        },
        {
            title: 'Note Taker',
            description: 'Express.js',
            image: note1,
            deployedLink: 'https://note-taker19-c47eace3c6ed.herokuapp.com/',
            githubLink: 'https://github.com/jeffch19/note-taker?tab=readme-ov-file'
          },
          {
            title: 'Text Editor',
            description: 'Progressive Web App',
            image: project1,
            deployedLink: 'https://text-editor-5u8z.onrender.com',
            githubLink: 'https://github.com/jeffch19/Text-Editor'
          },
          {
            title: 'Garden Bliss',
            description: 'Full Stack App',
            image: garden1,
            deployedLink: 'https://garden-planner19-05823e4485e2.herokuapp.com/',
            githubLink: 'https://github.com/jeffch19/garden-bliss'
          },
          {
            title: 'Book Search',
            description: 'MERN Stack',
            image: network1,
            deployedLink: 'https://book-search-engine-x5d0.onrender.com',
            githubLink: 'https://github.com/jeffch19/Book-search-engine.git'
          },
          {
            title: 'Employee Tracker',
            description: 'SQL',
            image: employee1,
            deployedLink: 'https://drive.google.com/file/d/1IKhXlrNKEALmOHDHV26SYN-qSPnP_E1U/view',
            githubLink: 'https://github.com/jeffch19/employee-tracker'
          },
        // ... Add more projects here
      ];
      return (
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <h3 className="portfolio-title">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <p className="portfolio-description">{project.description}</p>
              <div className="portfolio-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><img src={imgGit} alt="GitHub" className="footer-image" /></a>
              </div>
            </div>
          ))}
        </div>
      )
};

export default Portfolio;