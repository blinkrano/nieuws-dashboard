import './App.css';
import React, { Component } from 'react';
import CardsOverview from './Cards/CardsOverview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RTL Nieuws</h1>
        </header>
        <CardsOverview></CardsOverview>
      </div>
    );
  }
}

export default App;
