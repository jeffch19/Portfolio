// AboutMe.js
import React from 'react';
// import avatar from '../assets/avatar.jpg';

const AboutMe = () => {
    return (
        <section id="about" className="active">
            <h2>About Me</h2>
            <img src={avatar} alt="Developer's Photo" />
            <p>Enthusiastic and aspiring Software Engineer with a strong foundation in web development technologies and a passion for creating dynamic, user-friendly web applications. Eager to contribute my skills and dedication to a collaborative development team. A quick learner with a commitment to staying updated with the latest industry trends and best practices. Excited to take on new challenges and grow as a developer while delivering high-quality web solutions.</p>
        </section>
    );
};

export default AboutMe;
