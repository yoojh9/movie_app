import React, { Component } from 'react';
import './Movie.css';

// 컴포넌트는 항상 render 해야 함
// 컴포넌트 생성 -> render -> return -> jsx
class Movie extends Component{
  render() {
    console.log(this.props)
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component{
  render() {
    return (
      <img src={this.props.poster}/>
    )
  }
}
export default Movie;
