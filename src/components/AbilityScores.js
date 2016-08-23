import React, { Component } from 'react';

export default class AbilityScores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: 'asdf'
    }
  }

  componentDidMount() { 
    this.props.scores.then(data => {
      this.setState({scores: data.scores});
      console.log(this.state)
    });
  }

  render() {
    return (
      <div>
        <div>STR {this.state.scores.str.base}</div>
        <div>DEX {this.state.scores.dex}</div>
        <div>CON {this.state.scores.con}</div>
        <div>WIS {this.state.scores.wis}</div>
        <div>INT {this.state.scores.int}</div>
        <div>CHA {this.state.scores.dex}</div>
      </div>
    );
  }
}
