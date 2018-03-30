import './Card.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

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
    const style = {
      backgroundImage: `url(${image})`,
    }

    return <div className="Card" key={publishDate} style={style}>
      <div className="Card__date">
        <h1>RTL Nieuws</h1>
        <h2><Moment locale="nl" format="dddd DD MMMM HH:mm"/></h2>
      </div>
      <div className="Card__container">
        <div className="Card__content">
          <h1 className="Card__content--title">{headline}</h1>
          <p className="Card__content--description">{content}</p>
        </div>
      </div>
    </div>;
  }
}

export default Card;
