import React, { Component } from 'react';
import './App.css';
import FlipClock from './FlipClock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Flipdown Clock</header>
        <FlipClock />
      </div>
    );
  }
}

export default App;
