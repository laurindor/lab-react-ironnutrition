import React, { useState } from 'react';


export default function SearchBar (props) {

const[formState,setFormState] = useState('')
const {filterFood} = props

function handleSearch(event) {
    setFormState( event.target.value ) //related to Onchange 

}

function handleOnSubmit (event){
    event.preventDefault(); 
    filterFood(formState)
    setFormState('')


}


return(
<div>
<form onSubmit = {handleOnSubmit}>
<input type="text" name='formstate' placeholder="Search..."value={formState} onChange={handleSearch}/>
<button type="submit">Search</button>
</form>
</div>

)

}
