import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

// 컴포넌트는 항상 render 해야 함
// 컴포넌트 생성 -> render -> return -> jsx


// class Movie extends Component{
//
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }
//
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// smartcomponent -> dumb component로 변경
// 클래스 안에는 this가 있지만 functional 컴포넌트는 this가 필요 없음.
function Movie({title, poster}){
  return (
    <div>
      <MoviePoster poster={poster}/>
      <h1>{title}</h1>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

// class MoviePoster extends Component{
//   static propTypes = {
//     poster : PropTypes.string.isRequired
//   }
//
//   render() {
//     return (
//       <img src={this.props.poster} alt="Movie Poster"/>
//     )
//   }
// }


/*
 functional stateless component ( dumb component)
*/
function MoviePoster({poster}){
  return(
    <img src={poster} alt="Movie Poster"/>
    )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;
