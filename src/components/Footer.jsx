// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul>
            <li><a href="https://github.com/jeffch19"><img src="/github.jpg" alt="GitHub" className="footer-image" /></a></li>
<li><a href="https://www.linkedin.com/in/jeff-cummings-782a24170/"><img src="/linkedin.png" alt="LinkedIn" className="footer-image" /></a></li>
                <li><a href="link-to-third-platform-profile" target="_blank">Third Platform</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
