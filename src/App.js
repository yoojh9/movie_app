import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  // 만약 영화 앱을 만든다면 willMount()를 진행할 때 영화 api를 호출한다.
  componentWillMount(){
    console.log('will mount')

  }


  // 컴포넌트가 마운트 되면 5초 기다리고 state를 업데이트 하겠다.
  componentDidMount() {
    this._getMovies()
  }


   _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then( response => response.json() )
    .then( json => json.data.movies )
    .catch( err => console.log(err) )
  }

  // 리액트는 자체 기능이 많기 때문에 직접 만든 function과 차이점을 두기 위해 언더스코어를 사용
  _renderMovies = () => {
    console.log(this.state.movies)
    const movies = this.state.movies.map(movie => {
      // 리액트는 array 엘리먼트일 경우 unique key를 줘야함
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  render() {
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
