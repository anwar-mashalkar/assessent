import React, { useState } from 'react';
import './App.css';

const ShareButton = () => {
  return (
    <a href="https://www.instagram.com/" className="share-button"></a>
  );
};

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
    <div id="rating">
      <h1>5 star Rating</h1>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          className={index < rating ? 'active' : ''}
        >
          *
        </span>
      ))}
    </div>
    
    </div>
  );
};

export default Rating;
