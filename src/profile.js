import React from 'react';
import './profile.css';

function CardProfile({ setTimeframe }) {
  return (
    <div className="profile-card">
    <div  className='top'> 
    <img src="profile_image_url" alt="Profile" />
    <h2>Jeremy Robson</h2>
    </div>
    
      <div className="timeframes">
        <button onClick={() => setTimeframe('daily')}>Daily</button>
        <button onClick={() => setTimeframe('weekly')}>Weekly</button>
        <button onClick={() => setTimeframe('monthly')}>Monthly</button>
      </div>
    </div>
  );
}

export default CardProfile;
