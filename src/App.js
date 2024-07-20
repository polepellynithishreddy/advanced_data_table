import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataTable from './DataTable';
import data from './data.json'; // Make sure to import your dataset

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <div className="App">
      <h1>Data Table</h1>
      <DataTable data={data} />
    </div>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
