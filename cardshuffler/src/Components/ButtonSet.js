import React from 'react';
import DeckDraw from './DeckDraw';
import { playingCards } from '../Data/playingCards';
class ButtonSet extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    doDraw: false
  };

  drawCards = () => {
    this.setState({ doDraw: true });
  };

  render() {
    return (
      <div>
        <button className="ui button">1 Cut</button>
        <button className="ui button">Select Card</button>
        <button className="ui button" onClick={this.drawCards}>
          Deal
        </button>
        {this.state.doDraw && <DeckDraw cards={playingCards.cards} />}
        {/* {this.state.doDraw && <p>Button Clicked</p>} */}
      </div>
    );
  }
}

export default ButtonSet;
