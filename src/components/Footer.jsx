// Footer.js
import React from 'react';
import './Footer.css';
import imgGit from '../assets/github.jpg';
import imgLinkedIn from '../assets/linkedin.png'; // Import the LinkedIn image

const Footer = () => {
    return (
        <footer className='footer'>
            <ul>
                <li><a href="https://github.com/jeffch19" target="_blank" rel="noopener noreferrer"><img src={imgGit} alt="GitHub" className="footer-image" /></a></li>
                <li><a href="https://www.linkedin.com/in/jeff-cummings-782a24170/" target="_blank" rel="noopener noreferrer"><img src={imgLinkedIn} alt="LinkedIn" className="footer-image" /></a></li>
            </ul>
        </footer>
    );
};

export default Footer;