import React, { Component } from 'react';
import CardDeck from './CardDeck';
import ButtonSet from './ButtonSet';
import DeckDraw from './DeckDraw';

import { playingCards } from '../Data/playingCards';

class App extends Component {
  state = {
    doDraw: false
  };

  drawCards = () => {
    this.setState({ doDraw: true });
  };

  render() {
    return (
      <div className="ui container center aligned">
        <h1 className="App-header ui header">Card Shuffler</h1>
        <CardDeck />
        <ButtonSet drawCards={this.drawCards} />
        <div className="ui divider" />
        {this.state.doDraw && <DeckDraw cards={playingCards.cards} />}
      </div>
    );
  }
}

export default App;
