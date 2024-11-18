import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import '../styles/Destinations.css';

function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('https://explore-pnw-api.onrender.com/api/destinations')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error('Error fetching destinations:', error));
  }, []);

  return (
    <div className="destinations">
      <Navbar />
      <div className="destinations-content">
        <h2>Top Destinations in the Pacific Northwest</h2>
        <div className="destinations-grid">
          {destinations.map(destination => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Destinations;
