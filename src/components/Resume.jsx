// Resume.js
import React from 'react';


// import resume from '../assets/resume.pdf'; 

const Resume = () => {
    return (
        <div className='main-content'>
            <section id="resume">
                <h2>Resume</h2>
                <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a> {/* Add rel attribute for security */}
                <ul>
                    <li>Front-End Proficiencies</li>
                    <li>Back-End Proficiencies </li>
                    {/* Add more proficiencies */}
                </ul>
            </section>
        </div> 
    );
};

export default Resume;
