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

  //TODO: Add in a spinner component for loading cards. Will need to set status to true and run elements.

  render() {
    return (
      <div key={this.state.id}>
        <div className="card">
          <div className="image ui tiny" style={{ border: '1px solid black' }}>
            <Img src={this.state.cardImage} loader={<Spinner />} />
          </div>
          <div className="content">
            <div className="header">
              {this.state.cardName} of {this.state.cardSuit}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DeckDraw extends React.Component {
  render() {
    const allCards = this.props.cards.map(card => {
      return (
        <div key={card.id}>
          <RenderCard card={card} />
        </div>
      );
    });
    return <div className="ui centered cards">{allCards}</div>;
  }
}

//TODO: Create a new subcomponent for the sematic ui card elements and then map to all objects in that component.

export default DeckDraw;
