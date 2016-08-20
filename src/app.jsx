import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Builder extends Component {
  render() {
    return (
      <div>
        <script>alert();</script>
      </div>

      );
  }
}

ReactDOM.render(<Builder />, document.querySelector('.app'));