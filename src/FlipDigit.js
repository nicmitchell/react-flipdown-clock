import React, { Component } from 'react';

class FlipDigit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brother: {
        className: 'up',
        value: 0
      },
      sister: {
        className: 'down',
        value: this.props.value
      },
      activeDigit: 'brother'
    };
  }

  applyProps(props) {
    const activeDigitValues = {
      className: 'down',
      value: props.value
    }
    const activeDigit = (this.state.activeDigit ===  'brother') ? 'sister' : 'brother';
    const inActiveDigit = (this.state.activeDigit ===  'brother') ? 'brother' : 'sister';
    const newState = {
      ...this.state,
      [activeDigit]: activeDigitValues,  
      [inActiveDigit]: { className: 'up', value: this.state[inActiveDigit].value },
      activeDigit: activeDigit
    };
    this.setState(newState);
  }

  componentWillReceiveProps(nextProps) {
    this.applyProps(nextProps);
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.value !== this.props.value);
  }

  render() {
    const brother = this.state.brother;
    const sister = this.state.sister;
    return(
      <span className="digitContainer">
        <span className={ `digit ${ brother.className }` }>{ brother.value }</span>
        <span className={ `digit ${ sister.className }` }>{ sister.value }</span>
      </span>
    )
  }
}

export default FlipDigit;