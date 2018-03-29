import './Card.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    content: PropTypes.string,
    headline: PropTypes.string,
    image: PropTypes.string,
    publishDate: PropTypes.string,
  };

  state = {
    show: false,
    style: {
      opacity: 0,
      transition: 'all 2s ease',
    }
  }

  render() {
    const {content, headline, image, publishDate} = this.props;

    return <div className="Card" key={publishDate}>
      <img className="Card__image" src={image} alt={headline}></img>
      <div className="Card__container">
        <h1 className="Card__title">{headline}</h1>
        <p className="Card__content">{content}</p>
      </div>
    </div>;
  }
}

export default Card;
