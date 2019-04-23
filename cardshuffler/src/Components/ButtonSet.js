import React from 'react';

const ButtonSet = ({ drawCards, doDraw, deckRandomizer }) => {
  let dealButton = doDraw ? 'Reset' : 'Deal';
  return (
    <div style={{ paddingTop: '1rem' }}>
      <button className="ui button">1 Cut</button>
      <button className="ui button" onClick={() => deckRandomizer()}>
        Shuffle
      </button>
      <button className="ui button" onClick={() => drawCards()}>
        {dealButton}
      </button>
    </div>
  );
};

export default ButtonSet;
