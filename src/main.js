import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { movies } from './content.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: props.moives
    };
  }

  render() {
    let moiveLis = _.map(this.props.moives, (moive, index) => {
      return <li key={index}>{moive.title}</li>;
    })

    return (
      <div>
        <h1>Moive List</h1>
        <ul>{moiveLis}</ul>
      </div>
    );
  }
}

ReactDOM.render(<App moives={movies}/>, document.getElementById('app'));


