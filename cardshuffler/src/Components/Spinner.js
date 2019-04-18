import React from 'react';

const Spinner = () => {
  return (
    <div className="ui segment" style={{ height: '120px' }}>
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">Loading</div>
      </div>
      <p />
    </div>
  );
};

export default Spinner;
