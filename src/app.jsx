import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AbilityScores from './components/AbilityScores.js';
import Stats from './components/Stats.js';

class Sheet extends Component {

  constructor(props) {
    super(props);
    this.getCharacter = this.getCharacter.bind(this);
    this.state = {character: null};
  }

  componentWillMount() {
    this.state = { character: this.getCharacter() };
  }

  getCharacter() {
    return fetch('/adohand.json').then(result => {
      return result.json().then((d) => { 
        return d;
      });
    })
  }

  render() {
    return (
      <div>
        <div className="top">
          <Stats />
        </div>
        <div className="bottom">
          <AbilityScores scores={this.state.character} />
        </div>
      </div>
      );
  }
}

ReactDOM.render(<Sheet />, document.querySelector('.app'));