// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
            <h1>Jeffrey Cummings</h1>
                <ul>
                    <li><a href="#about" className="active">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
