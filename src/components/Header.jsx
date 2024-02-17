// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css';
import { NavLink } from 'react-router-dom'; // Import the NavLink component

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <h1>Jeffrey Cummings</h1>
                <ul>
                <li><NavLink to="/" activeClassName="active">About Me</NavLink></li>  
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>  
                    <li><NavLink to="/contact">Contact</NavLink></li>  
                    <li><NavLink to="/resume">Resume</NavLink></li>  
                </ul>
            </nav>
        </header>
    );
};

export default Header;
