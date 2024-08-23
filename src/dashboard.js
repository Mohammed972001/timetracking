import React from 'react';
import Card from './cards';
import './dashboard.css';

function Dashboard({ cardsData }) {
  return (
    <div className="dashboard">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} hours={card.hours} lastWeek={card.lastWeek} />
      ))}
    </div>
  );
}

export default Dashboard;
