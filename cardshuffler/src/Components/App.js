import React, { Component } from 'react';
import CardDeck from './CardDeck';
import ButtonSet from './ButtonSet';

import { playingCards } from '../Data/playingCards';

class App extends Component {
  render() {
    return (
      <div className="ui container center aligned">
        <h1 className="App-header ui header">Card Shuffler</h1>
        <CardDeck />
        <ButtonSet />
        <div className="ui divider" />
      </div>
    );
  }
}

export default App;
