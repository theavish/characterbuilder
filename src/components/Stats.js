import React, { Component } from 'react';
import HitPoints from './HitPoints.js';

export default class Stats extends Component {
  render() {
    return (
      <div>
        <div className="armor-class"></div>
        <div className="initiative"></div>
        <div className="speed"></div>
        <div className="passive-perception"></div>
        <div className="proficiency-bonus"></div>
        <HitPoints />
        <div className="hit-dice"></div>
        <div className="inspiration"></div>
        <div className="death-saves"></div>
        <div className="rest"></div>
      </div>
    );
  }
}
