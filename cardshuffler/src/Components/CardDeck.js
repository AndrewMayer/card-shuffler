import React from 'react';

const CardDeck = ({ cutDeck }) => {
  if (cutDeck) {
    return (
      <div>
        <div className="ui grid centered">
          <div className="four wide column">
            <img
              className="ui image medium "
              src={require(`../Data/halfDeck.png`)}
              alt="A deck of cards"
            />
          </div>
          <div className="four wide column">
            <img
              className="ui image medium"
              src={require(`../Data/halfDeck.png`)}
              alt="A deck of cards"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui grid">
        <div className="four wide column centered">
          <img
            className="ui fluid image"
            src={require(`../Data/fullDeck.png`)}
            alt="A deck of cards"
          />
        </div>
      </div>
    );
  }
};

export default CardDeck;
