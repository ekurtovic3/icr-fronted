import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer'
import App from './main-page';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <div>
     <App />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();