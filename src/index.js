import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './stylesheets/root.scss'
import Root from './components/root';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/store'

var preloadedState = {}
const store = configureStore(preloadedState)

function click(e) {
  if (!e)
    e = window.event;
  if (e.type && e.type == "contextmenu") {
    return false;
  }
}
document.oncontextmenu = click;

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
