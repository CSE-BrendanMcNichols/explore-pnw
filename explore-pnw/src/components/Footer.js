import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

function Footer({ isHomePage }) {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      {isHomePage ? (
        <p>&copy; 2024 Explore the Pacific Northwest. All Rights Reserved.</p>
      ) : (
        <button className="go-back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      )}
    </footer>
  );
}

export default Footer;
