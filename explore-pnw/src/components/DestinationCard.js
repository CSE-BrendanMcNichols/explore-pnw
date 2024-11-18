import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Destinations.css';

function DestinationCard({ destination }) {
  const { _id, name, main_image, description, activities, bestTime } = destination;

  return name === 'Space Needle' ? (
    <Link to="/space-needle" key={_id} className="destination-card">
      <img src={`https://explore-pnw-api.onrender.com/images/${main_image}`} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><em>Activities:</em> {activities}</p>
      <p><strong>Best Time to Visit:</strong> {bestTime}</p>
    </Link>
  ) : (
    <div className="destination-card" key={_id}>
      <img src={`https://explore-pnw-api.onrender.com/images/${main_image}`} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><em>Activities:</em> {activities}</p>
      <p><strong>Best Time to Visit:</strong> {bestTime}</p>
    </div>
  );
}

export default DestinationCard;
