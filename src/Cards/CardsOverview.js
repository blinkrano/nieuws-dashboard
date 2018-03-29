import './CardsOverview.css';

import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import Card from './Card'

const API = 'https://newsapi.org/v2/top-headlines?sources=rtl-nieuws';
const KEY = '&apiKey=4a423d2c0634409dbd26879b61ec9c2a';

class CardsOverview extends Component {
  state = {
    nieuwsItems: [],
    isLoading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ isLoading: true});
    this.fetchNews();
  }

  render() {
    const {isLoading, error, nieuwsItems} = this.state;
    const nieuwsItem = nieuwsItems.map((item, idx) =>
      <Card
        key={idx}
        image={item.urlToImage}
        headline={item.title}
        content={item.description}
        publishDate={item.publishedAt}
      />
    )

    return (
      <div className="CardsOverview">
        {error && <p>{error.message}</p>}
        {isLoading && <p>Nieuws laden..</p>}
        {nieuwsItem && nieuwsItem}
      </div>
    );
  }

  fetchNews() {
    fetch(API+KEY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Er is iets fout gegaan met het laden..');
        }
      })
      .then(data =>
        this.setState({
          nieuwsItems: data.articles,
          isLoading: false,
        })
      )
      .catch(error => this.setState({
        error,
        isLoading: false,
      }))
  }
}

export default CardsOverview;
