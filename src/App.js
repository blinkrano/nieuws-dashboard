import './App.css';
import React, { Component } from 'react';
import CardsOverview from './Cards/CardsOverview';

const API = 'https://newsapi.org/v2/top-headlines?sources=rtl-nieuws';
const KEY = '&apiKey=4a423d2c0634409dbd26879b61ec9c2a';

class App extends Component {
  state = {
    isLoading: false,
    error: null,
    nieuwsItems: [],
  }

  componentDidMount() {
    this.setState({ isLoading: true});
    this.fetchNews();
  }

  render() {
    const {isLoading, error, nieuwsItems} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RTL Nieuws</h1>
        </header>
        <div className="App-content">
          {error && <p>{error.message}</p>}
          {isLoading && <p>Nieuws laden..</p>}
          {nieuwsItems && <CardsOverview nieuwsItems={nieuwsItems}></CardsOverview>}
        </div>
      </div>
    );
  }

  async fetchNews() {
    try {
      const response = await fetch(API+KEY);
      let data;
      if (response.ok) {
        data = await response.json();
      } else {
        throw new Error('Er is iets fout gegaan met het laden..');
      }

      this.setState({
        nieuwsItems: data.articles,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      })
    }
  }
}

export default App;
