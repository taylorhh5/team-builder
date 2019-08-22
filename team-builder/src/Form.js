import React, { useState } from "react";
import app from "./App.js"

const Forms = props => { //props being psses from APP.js- Forms members={people} 3
console.log ("form", props)
return (
<div>
    {props.members.map(note => { //mapping over and passing note and using it below
        return (
            <div key ={note.id}>
            
            <h2>{note.name}</h2>
            <h3>{note.email}</h3>
            <h3>{note.role}</h3>
            
            </div>

        )
    })}
          
            
          </div>
       
    
)
}
export default Forms;
