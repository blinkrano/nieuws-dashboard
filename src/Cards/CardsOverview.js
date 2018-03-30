import './CardsOverview.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

import Card from './Card'

class CardsOverview extends Component {
  static propTypes = {
    nieuwsItems: PropTypes.array,
  };

  state = {
    currentIndex: 0,
  }

  loopCarrousel() {
    const delay = 10000;
    setInterval(() => {
      this.updateCarrousel();
    }, delay);
  }

  updateCarrousel = () => {
    const {currentIndex} = this.state;
    const {nieuwsItems} = this.props;

    const step = 1;
    const newIndex = (currentIndex >= (nieuwsItems.length - step)) ? 0 : (currentIndex + step);

    this.setState({
      currentIndex: newIndex,
    });
  };

  componentDidMount() {
    this.loopCarrousel();
  }

  render() {
    const {nieuwsItems} = this.props;

    return (
      <div className="CardsOverview">
        <div className="CardsOverview__header">
          <h1>RTL Nieuws</h1>
          <h2><Moment locale="nl" format="dddd DD MMMM HH:mm"/></h2>
        </div>
        {nieuwsItems && this.renderNieuwsItems(nieuwsItems)}
      </div>
    );
  }

  renderNieuwsItems(news) {
    const {currentIndex} = this.state;
    let shownItems = [
      news[currentIndex]
    ];

    if (shownItems) {
      return shownItems.map((item, index) => this.renderNieuwsItem(item, index));
    }
  }

  renderNieuwsItem(item, index) {
    return item && <Card
      key={index}
      image={item.urlToImage}
      headline={item.title}
      content={item.description}
      publishDate={item.publishedAt}
    />
  }
}

export default CardsOverview;
