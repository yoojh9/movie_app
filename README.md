# 리액트로 만들어본 movie_app
- 노마드 코더 ReactJS로 웹서비스 만들기 강의를 따라해봄

<br>

## 1. Component Life Cycle
- 자동으로 다음과 같은 Life Cycle이 일어난다
- Render: componentWillMount() -> render() -> componentDidMount()
- Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

### componentWillMount()
- 만약 영화 앱을 만든다면 영화 api 호출은 여기서 담당

### componentWillReceiveProps()
- 컴포넌트가 새로운 props를 받았을 경우 발생

### shouldComponentUpdate()
- 이전 props와 현재 props가 다를 경우 shouldComponentUpdate()==true가 되어 componentWillMount() update가 발생한다

<br>

## 2.state
- state는 리액트 컴포넌트 내에 있는 object이다
- state가 바뀔 때 마다 render가 발생한다.

<br>

## 3. smart component vs dumb component
- 모든 컴포넌트가 state가 있는 것은 아니다. 어떤 컴포넌트는 stateless functional 컴포넌트이기도 하다.
- smart component는 state가 있고, dumb component는 state가 없고 props만 가지고 있다.
- class 컴포넌트를 쓰는 대신 functional stateless component로 작성하면 dumb component가 된다.
- dumb component는 componentWillMound(), componentDidMount(), render, update state가 필요 없을 경우 사용한다.
- dumb component는 html을 return만 한다. 하지만 state를 잃게 됨으로써, update와 같은 기능이 사라지게 된다.  

```
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render(){
    return (
      <img src={this.props.poster} alt="Movie Poster"/>
      )
  }
}

 // 위와 같은 역할의 dumb 컴포넌트 (return을 위한 컴포넌트)
 function MoviePoster({poster}){
   return(
     <img src={poster} alt="Movie Poster"/>
     )
 }
```  

<br>

## 4. Promise
- 첫번째 라인이 끝나든 말든 두번쨰 라인을 진행하겠다는 컨셉
- 다른 작업의 수행 여부와 상관없이 진행된다.
- 비동기 작업이 종료된 이후의 결과값이나 실패 이유를 처리하기 위해 사용한다.

```
fetch(url)
 .then( response => console.log(response))
 .catch(err => console.log(err))
```


<br><br>
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
