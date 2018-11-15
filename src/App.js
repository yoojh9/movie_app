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
  componentWillMount(){
    // 만약 영화 앱을 만든다면 willMount()를 진행할 때 영화 api를 호출한다.
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {movies.map((movie, index)=>{
          // 리액트는 array 엘리먼트일 경우 unique key를 줘야함
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
