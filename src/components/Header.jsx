// Header.js
import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import the Link component
import './Header.css';
import { NavLink } from 'react-router-dom'; // Import the NavLink component

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();
    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', changeBackground);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, []);
    let style = {
        backgroundColor:
        navbar || location.pathname !== '/' ?   'transparent' :  '#21213d'  ,
        transition: '0.4s'
    }
    return (
        <header>
            <nav className="navbar" style={style}>
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
