import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AbilityScores from './components/AbilityScores.js';
import Stats from './components/Stats.js';

class Sheet extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <Stats />
        </div>
        <div className="bottom">
          <AbilityScores />
        </div>
      </div>
      );
  }
}

ReactDOM.render(<Sheet />, document.querySelector('.app'));