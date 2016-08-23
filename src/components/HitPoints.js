import React, { Component } from 'react';

export default class HitPoints extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentHP: props.currentHP
    };
  }

  increaseHP() {
    console.log('++')
  }

  decreaseHP() {
    this.setState({currentHP: currentHP--});
  }

  render() {
    return (
      <div>
        <div className="max-hp"></div>
        <div className="temp-hp"></div>
        <div className="current-hp"><input type="number" value={this.state.currentHP} /></div>
        <div className="plus-hp" onClick={this.increaseHP}>+</div>
        <div className="minus-hp" onClick={this.decreaseHP}>-</div>
      </div>
    );
  }
}
