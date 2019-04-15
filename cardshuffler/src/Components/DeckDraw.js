import React from 'react';

const RenderCard = props => {
  let cardImage = `https://github.com/hayeah/playing-cards-assets/blob/master/png/${
    props.card.name
  }_of_${props.card.suit}.png/?raw=true`;

  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={cardImage} alt="playing card image" />
        </div>
        <div className="header">
          {props.card.name} of {props.card.suit}
        </div>
      </div>
    </div>
  );
};

class DeckDraw extends React.Component {
  render() {
    const allCards = this.props.cards.map(card => {
      return (
        <div>
          <RenderCard card={card} />
        </div>
      );
    });
    return (
      <div className="ui grid centered">
        <div className="three wide column">
          <div>{allCards}</div>
        </div>
      </div>
    );
  }
}

//TODO: Create a new subcomponent for the sematic ui card elements and then map to all objects in that component.

export default DeckDraw;
