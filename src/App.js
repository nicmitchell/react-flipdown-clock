import React, { Component } from 'react';
import './App.css';
import FlipClock from './FlipClock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>React Flipdown Clock</header>
        <div className="flexVertical">
          <FlipClock />
        </div>
      </div>
    );
  }
}

export default App;
