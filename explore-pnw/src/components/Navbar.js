import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar({ isHomePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <h1>Explore the Pacific Northwest</h1>
      {isHomePage && (
        <div className="auth-buttons">
          <a href="#" className="auth-button">Login</a>
          <a href="#" className="auth-button">Create Account</a>
        </div>
      )}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/destinations">Destinations</a></li>
        <li><a href="/schedule-planner">Schedule Planner</a></li>
        <li><a href="/travel-tips">Travel Tips</a></li>
      </ul>
    </header>
  );
}

export default Navbar;
