// AboutMe.js
import React from 'react';
import me from '../assets/me.jpg'; 
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='main-content'>
        <section id="about" className="active">
            <h2>About Me</h2>
            <img src={me} alt="Developer's Photo" className='header-image'/> {/* Use the imported image */}
            <p>Enthusiastic and aspiring Software Engineer with a strong foundation in web development technologies and a passion for creating dynamic, user-friendly web applications. Eager to contribute my skills and dedication to a collaborative development team. A quick learner with a commitment to staying updated with the latest industry trends and best practices. Excited to take on new challenges and grow as a developer while delivering high-quality web solutions.</p>
        </section>
        </div>
    );
};

export default AboutMe;