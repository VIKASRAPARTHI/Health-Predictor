import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_2.png';
import '../assets/styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/community" className="nav-link">Community</Link>
      </div>
      <div className="nav-center">
        <img src={logo} alt="WELLPRO Logo" className="nav-logo" />
        
      </div>
      <div className="nav-right" style={{ overflow: 'hidden' }}>
        <Link to="/ai-chatbot" className="nav-link">AI ChatBot</Link>
      </div>
    </nav>
  );
};

export default Navbar;
