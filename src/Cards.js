import React, { useState } from 'react';
import './App.css';

const Cards = ({ amount }) => {
  const [cards, setCards] = useState(Array(amount).fill('down'));

  const handleClick = (index) => {
    const newCards = cards.map((card, i) => (i === index ? (card === 'down' ? 'up' : 'down') : 'down'));
    setCards(newCards);
  };

  return (
    <div >
        <div class="cards-container">
           
      <table>
        <tbody>
          <tr>
            {cards.map((card, index) => (
              <td key={index} onClick={() => handleClick(index)} className={`card ${card}`}>
                {card}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
        </div>
      
      
    </div>
  );
};

export default Cards;
