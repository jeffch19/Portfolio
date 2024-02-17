// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <h1>Jeffrey Cummings</h1>
                <ul>
                    <li><Link to="/" className="active">About Me</Link></li> 
                    <li><Link to="/portfolio">Portfolio</Link></li> 
                    <li><Link to="/contact">Contact</Link></li> 
                    <li><Link to="/resume">Resume</Link></li> 
                </ul>
            </nav>
        </header>
    );
};

export default Header;
