import React from 'react';
import HandSizer from './HandSizer';

const ButtonSet = ({
  doDraw,
  cutDeck,
  drawCards,
  deckRandomizer,
  changeHandSize,
  cutSwitch
}) => {
  let dealButton = doDraw ? 'Reset' : 'Deal';
  let cutButton = cutDeck ? 'Restack' : 'Cut';
  return (
    <div>
      <div className="ui grid">
        <div className="two wide column centered">
          <HandSizer changeHandSize={changeHandSize} />
        </div>
      </div>
      <div style={{ paddingTop: '1rem' }}>
        <button
          className="ui button"
          onClick={() => cutSwitch()}
          disabled={doDraw}
        >
          {cutButton}
        </button>
        <button
          className="ui button"
          onClick={() => {
            deckRandomizer();
            cutSwitch();
          }}
          disabled={!cutDeck}
        >
          Shuffle
        </button>
        <button className="ui button" onClick={drawCards} disabled={cutDeck}>
          {dealButton}
        </button>
      </div>
    </div>
  );
};

export default ButtonSet;
