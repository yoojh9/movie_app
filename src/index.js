import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM은 리액트를 웹사이트에 출력(render)하는걸 도와주는 모델
// 리액트를 웹에 올리고 싶다면 -> reactDOM을 쓰고 리액트를 모바일에 올려놓고 싶다면 -> reactNative를 사용
// 리액트 - UI 라이브러리 / 리액트DOM - 리액트를 웹사이트에 출력해 줌
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
