
import React, { Component } from 'react';
import FlipDigit from './FlipDigit';

export default class FlipClock extends Component {
  constructor() {
    super();
    this.state = { now: new Date() };
    this._interval = setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }
  render() {
    var digits = this._extractDigits();
    return <div className="clockContainer">
        <FlipDigit value={digits[0]}/>
        <FlipDigit value={digits[1]}/>
        <span className="colon">:</span>
        <FlipDigit value={digits[2]}/>
        <FlipDigit value={digits[3]}/>
        <span className="colon">:</span>
        <FlipDigit value={digits[4]}/>
        <FlipDigit value={digits[5]}/>
      </div>
  }
  _extractDigits() {
    var { now } = this.state;
    var hours = toDigits(now.getHours());
    var minutes = toDigits(now.getMinutes());
    var seconds = toDigits(now.getSeconds());
    return hours.concat(minutes).concat(seconds);
  }
}

function toDigits(number) {
  var str = number.toString();
  if (str.length === 1) str = '0' + str;
  return [str[0], str[1]];
}
