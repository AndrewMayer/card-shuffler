import React from 'react';

const CardDeck = ({ changeHandSize }) => {
  return (
    <div className="ui grid">
      <div className="six wide column" />
      <div className="four wide column">
        <img
          className="ui fluid image"
          src={require(`../Data/deck.png`)}
          alt="A deck of cards"
        />
      </div>
      <div className="two wide column">
        <div
          className="ui fluid input"
          style={{ height: '25%', paddingTop: '5rem' }}
          onChange={e => changeHandSize(e.target.value)}
        >
          <input type="number" placeholder="5" />
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
