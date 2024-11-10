import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Destinations.css';

function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('https://explore-pnw-api.onrender.com/api/destinations')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error("Error fetching destinations:", error));
  }, []);

  return (
    <div className="destinations">
      <Navbar />
      <div className="destinations-content">
        <h2>Top Destinations in the Pacific Northwest</h2>
        <div className="destinations-grid">
          {destinations.map(destination => (
            destination.name === "Space Needle" ? (
              <Link to="/space-needle" key={destination._id} className="destination-card">
                <img src={`https://explore-pnw-api.onrender.com/images/${destination.main_image}`} alt={destination.name} />
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <p><em>Activities:</em> {destination.activities}</p>
                <p><strong>Best Time to Visit:</strong> {destination.bestTime}</p>
              </Link>
            ) : (
              <div className="destination-card" key={destination._id}>
                <img src={`https://explore-pnw-api.onrender.com/images/${destination.main_image}`} alt={destination.name} />
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <p><em>Activities:</em> {destination.activities}</p>
                <p><strong>Best Time to Visit:</strong> {destination.bestTime}</p>
              </div>
            )
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Destinations;
