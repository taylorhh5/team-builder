import React, { useState} from "react";
import './App.css';

const FormLayout = props => {
    const [note, setNote] =useState ({name: '', email: '', role: ''})

    const changeHandler = event => {
        setNote ({ ...note, [event.target.name]:
        event.target.value})
    };

    const submitForm =event => {

        event.preventDefault();
            const newNote = {
                ...note,
                id: Date.now()
            };    
            props.addNewNote(newNote);
            setNote({name:"", email: "", role:""});
};
    return (
        <form onSubmit= {submitForm}>

<label htmlFor="title">Enter Name</label> 
<input type="text"
 name="name"
  placeholder="What's your name?" 
  value={note.name} //dynamic from state
  onChange={changeHandler}
  />

<label htmlFor="email">Enter Email</label>

<input name ="email" 
placeholder="What's your email?" 
value={note.email}

onChange={changeHandler}

/>

<label htmlFor="role">Enter Role</label>
<input type="text"
 name="role"
  placeholder="What's your role?" 
  value={note.role}

  onChange={changeHandler}
  
  />
  <button type="submit">Add</button>
        
        </form>
    )

};
export default FormLayout;