import React from 'react';

class RenderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: 'loading',
      cardImage: `https://github.com/hayeah/playing-cards-assets/blob/master/png/${
        props.card.name
      }_of_${props.card.suit}.png/?raw=true`,
      cardName: props.card.name,
      cardSuit: props.card.suit
    };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: '' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  //TODO: Add in a spinner component for loading cards. Will need to set status to true and run elements.

  render() {
    return (
      <div>
        <div className="card">
          <div className="image ui tiny">
            <img
              src={this.state.cardImage}
              alt="playing card"
              onLoad={() => this.handleImageLoaded()}
              onError={() => this.handleImageErrored()}
            />
            {this.state.imageStatus}
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
        <div>
          <RenderCard card={card} />
        </div>
      );
    });
    return <div className="ui centered cards">{allCards}</div>;
  }
}

//TODO: Create a new subcomponent for the sematic ui card elements and then map to all objects in that component.

export default DeckDraw;
