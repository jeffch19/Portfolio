// Resume.js
import React from 'react';
import './Resume.css';

import project1 from '../assets/linkedin.png';

const Resume = () => {
    return (
        <div className='main-content'>
            <section id="resume">
                <h2>Resume</h2>
                Download my <a href="https://docs.google.com/document/d/1gwar_dsS5eUSnXEu0okDd9-La1OrL_BcdqXn9ckzphk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a> OR view my <a href="https://www.credly.com/badges/ec2a5969-e79e-4d0d-acfa-9e6d00604d5d/email" target="_blank" rel="noopener noreferrer">AWS Certificate</a>
                <h4>Front-End Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h4>Back-End Proficiencies</h4>
                <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>

                </ul>
            </section>
        </div> 
    );
};

export default Resume;
