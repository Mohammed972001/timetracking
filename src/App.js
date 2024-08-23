import React, { useState, useEffect } from 'react';
import CardProfile from './profile.js';
import Dashboard from './dashboard';
import './App.css';
import data from './data/data.json';

function App() {
  const [timeframe, setTimeframe] = useState('weekly');
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setCardsData(data[timeframe]);
  }, [timeframe]);

  return (
    <div className="continer">
      <div className='profile-card'>
      <CardProfile setTimeframe={setTimeframe} />
      </div>
      <div className='card-total'>
      <Dashboard cardsData={cardsData} />
      </div>
      </div>
   
  );
}

export default App;
