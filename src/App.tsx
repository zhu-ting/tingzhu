import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonType } from './Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Button disabled>Button</Button>
          <Button btnType={ButtonType.Default}>Button</Button>
          <Button btnType={ButtonType.Danger}>Button</Button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
