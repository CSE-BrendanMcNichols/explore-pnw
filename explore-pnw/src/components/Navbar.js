import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
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
          <Link to="#" className="auth-button">Login</Link>
          <Link to="#" className="auth-button">Create Account</Link>
        </div>
      )}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/schedule-planner">Schedule Planner</Link></li>
        <li><Link to="/travel-tips">Travel Tips</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
