import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Star from './star';
import Cards from './Cards';
import Cmnt from './cmnt';

const App = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div>
        <a href="https://www.instagram.com/" className="share-button"></a>
      </div>
      <div className="button-container">
        <button
          className={`app-button ${activeButton === 'cards' ? 'active' : ''}`}
          onClick={() => handleButtonClick('cards')}
        >
          Children's Game Click here
        </button>
        <button
          className={`app-button ${activeButton === 'cmnt' ? 'active' : ''}`}
          onClick={() => handleButtonClick('cmnt')}
        >
          Comment Click here
        </button>
        <button
          className={`app-button ${activeButton === 'star' ? 'active' : ''}`}
          onClick={() => handleButtonClick('star')}
        >
        for Ratings click here
        </button>
      </div>

      {activeButton === 'cards' && <Cards amount={3} />}
      {activeButton === 'cmnt' && <Cmnt />}
      {activeButton === 'star' && <Star />}
    </div>
  );
};

export default App;
