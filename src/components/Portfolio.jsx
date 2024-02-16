// Portfolio.js
import React from 'react';
// import project1 from '../assets/project1.jpg';
// import project2 from '../assets/project2.jpg';
// import project3 from '../assets/project3.jpg';
// import project4 from '../assets/project4.jpg';
// import project5 from '../assets/project5.jpg';
// import project6 from '../assets/project6.jpg';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="project">
                <img src={project1} alt="Project 1" />
                <h3>Project 1</h3>
                <p>Description of the project.</p>
                <a href="link-to-deployed-app" target="_blank">View App</a>
                <a href="link-to-github-repo" target="_blank">GitHub Repo</a>
            </div>
            {/* Repeat the above for other projects */}
        </section>
    );
};

export default Portfolio;
