// AboutMe.js
import React from 'react';
// import avatar from '../assets/avatar.jpg';

const AboutMe = () => {
    return (
        <section id="about" className="active">
            <h2>About Me</h2>
            <img src={avatar} alt="Developer's Photo" />
            <p>Short bio about the developer.</p>
        </section>
    );
};

export default AboutMe;
