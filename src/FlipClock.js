
import React, { Component } from 'react';

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
    return <div style={style.main}>
        <div>{digits[0]}</div>
        <div>{digits[1]}</div>
        :
        <div>{digits[2]}</div>
        <div>{digits[3]}</div>
        :
        <div>{digits[4]}</div>
        <div>{digits[5]}</div>
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

var style = {
  main: {
    display: 'flex',
  }
};

