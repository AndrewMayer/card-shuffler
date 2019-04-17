import React from 'react';

const ButtonSet = ({ drawCards }) => {
  console.log(drawCards);
  return (
    <div>
      <button className="ui button">1 Cut</button>
      <button className="ui button">Shuffle</button>
      <button className="ui button" onClick={() => drawCards()}>
        Deal
      </button>
    </div>
  );
};

export default ButtonSet;
