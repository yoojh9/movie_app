import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // 컴포넌트가 로드 될 때 사용
  state = {
  }

  // 만약 영화 앱을 만든다면 willMount()를 진행할 때 영화 api를 호출한다.
  componentWillMount(){
    console.log('will mount')
  }


  // 컴포넌트가 마운트 되면 5초 기다리고 state를 업데이트 하겠다.
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        movies: [
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
          },
          {
            title: "나는 내일, 어제의 너와 만난다",
            poster: "https://t1.daumcdn.net/cfile/tistory/9914593A5A5F45211D"
          }
        ]
      })
    },2000)
  }

  // 리액트는 자체 기능이 많기 때문에 직접 만든 function과 차이점을 두기 위해 언더스코어를 사용
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index)=>{
      // 리액트는 array 엘리먼트일 경우 unique key를 줘야함
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
