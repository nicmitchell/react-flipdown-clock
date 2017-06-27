import React, { Component } from 'react';

class FlipDigit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '0': this.props.value,
      '1': 0,
      activeDigit: 0
    };
  }

  applyProps(props) {
    const nextActiveDigit = Number(!this.state.activeDigit);
    this.setState({
      ...this.state,
      [nextActiveDigit]: props.value,
      activeDigit: Number(nextActiveDigit)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.applyProps(nextProps);
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.value !== this.props.value);
  }

  render() {
    const brotherValue = Number(this.state[0]);
    const sisterValue = Number(this.state[1]);
    const brotherClass = (!this.state.activeDigit) ? 'down' : 'up';
    const sisterClass = (this.state.activeDigit) ? 'down' : 'up';

    return(
      <span className="digitContainer">
        <span className={ `digit ${ brotherClass }` }>{ brotherValue }</span>
        <span className={ `digit ${ sisterClass }` }>{ sisterValue }</span>
      </span>
    )
  }
}

export default FlipDigit;