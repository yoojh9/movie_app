import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

// smartcomponent -> dumb component로 변경
// 클래스 안에는 this가 있지만 functional 컴포넌트는 this가 필요 없음.
function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map( (genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie_Synopsis">
          {synopsis}
        </p>
      </div>
      <h1>{title}</h1>
    </div>
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie_Genre">{genre} </span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

/*
 functional stateless component ( dumb component)
*/
function MoviePoster({poster, alt}){
  return(
    <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}



export default Movie;
