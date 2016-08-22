import React, { Component } from 'react';

export default class HitPoints extends Component {
  increaseHP() {
    console.log('++')
  }

  decreaseHP() {
    console.log('--')
  }

  render() {
    return (
      <div>
        <div className="max-hp"></div>
        <div className="temp-hp"></div>
        <div className="current-hp"></div>
        <div className="plus-hp" onClick={this.increaseHP}>+</div>
        <div className="minus-hp" onClick={this.decreaseHP}>-</div>
      </div>
    );
  }
}
