import React, { Component } from 'react';

class FlipDigit extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.applyProps(props);
  }

  applyProps(props) {
    setTimeout(() => this.onFlipTransitionEnd(), 1500);
  }

  componentWillReceiveProps(nextProps) {
    this.applyProps(nextProps);
  }

  render() {
    let flipDown = this.props.value !== this.state.currentValue ? 'flip-down' : '';
    return(
      <span className="digitContainer">
        <span className="digit down">{ this.state.currentValue }</span>
        <span className={ `${ flipDown } digit up`} onTransitionEnd={ (e) => this.onFlipTransitionEnd(e) }>{ this.props.value }</span>
      </span>
    )
  }

  onFlipTransitionEnd() {
    const next = this.props.value;
    this.setState({ currentValue: next });
  }
}

export default FlipDigit;