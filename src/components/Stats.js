import React, { Component } from 'react';
import HitPoints from './HitPoints.js';

export default class Stats extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      currentHP: this.props.currentHP
    };
  }

  render() {
    return (
      <div>
        <div className="armor-class"></div>
        <div className="initiative"></div>
        <div className="speed"></div>
        <div className="passive-perception"></div>
        <div className="proficiency-bonus"></div>
        <HitPoints currentHP={this.state.currentHP} />
        <div className="hit-dice"></div>
        <div className="inspiration"></div>
        <div className="death-saves"></div>
        <div className="rest"></div>
      </div>
    );
  }
}
