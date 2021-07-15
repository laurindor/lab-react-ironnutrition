import React, { useState } from 'react';

function AddFood (props){

   const initialState = {}; //formu vacio al principio

   const [formState, setFormState]= useState(initialState)

  function handleChange(event){
      setFormState({...formState, [event.target.name] : event.target.value})
  }

  function handleOnSubmit(event){
    event.preventDefault();
    props.addFoodHandler(formState)
    setFormState(initialState) //esto limpia el formulario cuando lo has rellenado
  }



  return(
  
  <div className="AddFood">
  <h4>Add Food </h4>

  <form onSubmit={handleOnSubmit} >
    <label>Name:</label>
    <input type="text" name="name" value={formState.name} onChange={handleChange} />

    <label>Calories:</label>
    <input type="text" name="calories" value={formState.calories} onChange={handleChange} />

    <label>Image:</label>
    <input type="url" name="image" value={formState.image} onChange={handleChange} />
    
    <button type="submit">Add Food</button>
  </form>
</div>

)
}




export default AddFood