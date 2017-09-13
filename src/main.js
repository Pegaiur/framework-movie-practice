import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
];

class App extends React.Component {

  constructor(props) {
    super(props);

    alert('test');
  }

  render() {
    return (
      <h1>Moive List</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


