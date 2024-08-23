import React from 'react';
import './card.css';

function Card({ title, hours, lastWeek }) {
  return (
    <div className="card">
      <div className="icon-container">
        <img src={'./images/image-jeremy.png'} alt="Icon" className="icon" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{hours}hrs</p>
        <small>Last Week - {lastWeek}hrs</small>
      </div>
    </div>
  );
}

export default Card;
