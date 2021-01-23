import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.REACT_APP_SENTRY_ENABLE === 'true') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_VERSION,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
