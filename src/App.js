import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:"Matrix",
    poster:"https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
  {
    title:"star wars",
    poster:"https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
  },
  {
    title:"x-man",
    poster:"https://nyoobserver.files.wordpress.com/2018/06/59542417c9e04.jpg?quality=80&w=970"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie=>{
          return <Movie title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}

export default App;
