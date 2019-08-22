import React, { useState} from "react";

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
  placeholder="name placeholder" 
  value={note.name} //dynamic from state
  onChange={changeHandler}
  />

<label htmlFor="email">Enter Email</label>

<input name ="email" 
placeholder="whats your email?" 
value={note.email}

onChange={changeHandler}

/>

<label htmlFor="role">Enter Role</label>
<input type="text"
 name="role"
  placeholder="role placeholder" 
  value={note.role}

  onChange={changeHandler}
  
  />
  <button type="submit">Add</button>
        
        </form>
    )

};
export default FormLayout;