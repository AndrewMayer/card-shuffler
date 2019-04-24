import React from 'react';
import Img from 'react-image';
import Spinner from './Spinner';

class RenderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: 'loading',
      cardImage: `https://github.com/hayeah/playing-cards-assets/blob/master/png/${
        props.card.name
      }_of_${props.card.suit}.png/?raw=true`,
      cardName: props.card.name,
      cardSuit: props.card.suit,
      id: props.card.id
    };
  }

  render() {
    return (
      <div key={this.state.id}>
        <div className="ui fluid card">
          <div className="center image ui small">
            <Img src={this.state.cardImage} loader={<Spinner />} />
          </div>
          <div className="content">
            <div className="center aligned header">
              {this.state.cardName} of <br /> {this.state.cardSuit}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DeckDraw extends React.Component {
  render() {
    const allCards = this.props.cards
      .slice(0, this.props.handSize)
      .map(card => {
        return (
          <div className="two wide column" key={card.id}>
            <RenderCard card={card} />
          </div>
        );
      });
    return (
      <div>
        <div className="ui grid centered">{allCards}</div>
      </div>
    );
  }
}

//TODO: Create a new subcomponent for the sematic ui card elements and then map to all objects in that component.

export default DeckDraw;
