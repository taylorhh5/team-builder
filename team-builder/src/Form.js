import React, { useState } from "react";
import app from "./App.js"

const Forms = props => { //props being psses from APP.js- Forms members={people} 3
console.log ("form", props)
return (
<div className= "formsParent">
    {props.members.map(note => { //mapping over and passing note and using it below
        return (
            <div className ="forms" key ={note.id}>
            
            <h1> Name: {note.name}</h1>
            <h2>Email: {note.email}</h2>
            <h2>Role: {note.role}</h2>
            
            </div>

        )
    })}
          
            
          </div>
       
    
)
}
export default Forms;
