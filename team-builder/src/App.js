import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import data from './Data.js'
import Forms from "./Form.js"
import Cards from "./Card.js"




function App() {
const [people, setPeople]= useState(data);
console.log (data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
     <Forms />
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
