import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { movies } from './content.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: props.moives,
      displayMovies: props.moives
    };
  }

  onSearch(text) {
    let filteredMovies = _.filter(this.state.movies, (movie) => {
      return _.includes(movie.title, text);
    });
    this.setState({ displayMovies: filteredMovies });
  }

  onAdd(text) {
    let newMovie = { title: text };
    let newMovies = this.state.movies.slice();
    newMovies.push(newMovie);
    this.setState({ movies: newMovies });
    this.setState({ displayMovies: newMovies });
  }

  render() {
    let moiveLis = _.map(this.state.displayMovies, (moive, index) => {
      return <li key={index}>{moive.title}</li>;
    })
    moiveLis = moiveLis.length > 0 ? moiveLis : <p>No Search Result :(</p>

    return (
      <div>
        <h1>Moive List</h1>
        <Add clickFunc={(text) => this.onAdd(text)}/>
        <Search clickFunc={(text) => this.onSearch(text)}/>
        <ul>{moiveLis}</ul>
      </div>
    );
  }
}

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input id="search-text" type="text" placeholder="Search..."/>
        <button onClick={() => this.props.clickFunc(document.getElementById('search-text').value)}>Go!</button>
      </div>
    );
  }

}

class Add extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input id="add-text" type="text" placeholder="Add movie title here"/>
        <button onClick={() => this.props.clickFunc(document.getElementById('add-text').value)}>Add</button>
      </div>
    );
  }

}

ReactDOM.render(<App moives={movies}/>, document.getElementById('app'));


