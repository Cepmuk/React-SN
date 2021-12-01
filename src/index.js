import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, postMessage: 'New post', likesCounter: '12' },
  { id: 2, postMessage: 'My first post', likesCounter: '42' },
  { id: 3, postMessage: 'Test post', likesCounter: '100500' },
  { id: 4, postMessage: 'Post from index.js', likesCounter: '7' },
]

let dialogues = [
  { id: 1, name: 'Sergey' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Jana' },
  { id: 4, name: 'Kirill' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'Privet' },
  { id: 4, message: 'My name is' },
  { id: 5, message: 'Hello world' },
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogues={dialogues} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
