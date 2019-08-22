import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import data from './Data.js'
import Forms from "./Form.js"
import FormLayout from "./MainForm.js"




function App() {
const [people, setPeople]= useState(data); // grabbing data, seeting state 1
console.log (data)
const addNewNote = note => {
  setPeople([...people, note]);
};

  return (
    <div className="App">
      <header className="App-header">
        Team Members
        </header>
    <div>
    <FormLayout addNewNote={addNewNote}/> 
     <Forms members={people}/>   
      </div>
      
    </div>
  );
}
//passed in data to child component forms 2
export default App;
