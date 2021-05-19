import React from 'react';
import logo from './logo.svg';
import useURLLoader from './hooks/useURLLoader';
import './App.css';

function App() {
  const [ data, loading ] = useURLLoader('https://dog.ceo/api/breed/frise/bichon/images/random');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        { loading ? <p>Loading...</p> :
        <img src={data && data.message} width="500" height="500" />}
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
