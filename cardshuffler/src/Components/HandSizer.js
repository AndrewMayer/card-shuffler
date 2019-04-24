import React from 'react';

const HandSizer = ({ changeHandSize }) => {
  return (
    <div>
      Hand Size
      <div
        className="ui fluid input"
        style={{ height: '25%' }}
        onChange={e => changeHandSize(e.target.value)}
      >
        <input type="number" placeholder="5" />
      </div>
    </div>
  );
};

export default HandSizer;
