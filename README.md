# 리액트로 만들어본 movie_app
- 노마드 코더 ReactJS로 웹서비스 만들기 강의를 따라해봄

<br>

## Component Life Cycle
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


## state
- state는 리액트 컴포넌트 내에 있는 object이다
- state가 바뀔 때 마다 render가 발생한다.

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
