// Resume.js
import React from 'react';
// import resume from '../assets/resume.pdf';

const Resume = () => {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <a href={resume} target="_blank">Download Resume</a>
            <ul>
                <li>Front-End Proficiencies</li>
                <li>Back-End Proficiencies </li>
                {/* Add more proficiencies */}
            </ul>
        </section>
    );
};

export default Resume;
