import React from 'react';

function TipCard({ tip }) {
  return (
    <div className="tip-card">
      <div className="user-info">
        <img src={tip.avatar} alt={tip.name} />
        <h3>{tip.name}</h3>
      </div>
      <p>{tip.text}</p>
    </div>
  );
}

export default TipCard;
