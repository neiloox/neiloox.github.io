import { useState, useCallback } from 'react';
import * as Sentry from "@sentry/react";
import logo from './logo.svg';
import './App.css';
import TestPage from './TestPage';

function App() {
  const [showTest, setShowTest] = useState(false);

  const onClickBtn1 = useCallback(() => {
    Sentry.captureMessage("Something went wrong");
    console.log(window.neiltest.test1);
  }, []);

  const onClickBtn2 = useCallback(() => {
    setShowTest(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{process.env.REACT_APP_VERSION}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button onClick={onClickBtn1}>Callback error</button>
          <button onClick={onClickBtn2}>Rendering error</button>
        </div>
        {showTest && <TestPage />}
      </header>
    </div>
  );
}

export default App;
