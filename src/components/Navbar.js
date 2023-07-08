import React from 'react';
import './Navbar.css';
import logo from '../assets/Main_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} alt="logo_logistics" className="image-logo"/>
        {/* Your navigation links */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><FontAwesomeIcon icon={faSearch} className="search-icon" /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;