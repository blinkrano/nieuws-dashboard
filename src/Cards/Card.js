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

  cardItem = null;

  setCardItemRef = element => {
    this.cardItem = element;
  };

  componentDidMount() {
    this.cardItem.style.opacity = 1;
  }

  render() {
    const {content, headline, image, publishDate} = this.props;
    const style = {
      backgroundImage: `url(${image})`,
      opacity: 0,
    }

    return <div className="Card" key={publishDate} style={style} ref={this.setCardItemRef}>
      <div className="Card__container">
        <div className="Card__content">
          <h1 className="Card__content--title">{headline}</h1>
          <p className="Card__content--description">{content}</p>
        </div>
      </div>
    </div>;
  }

  componentDidUpdate(){
    setTimeout(() => {
      this.cardItem.style.opacity = 1;
    }, 50);
  }
}

export default Card;
