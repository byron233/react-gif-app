import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( inputValue.trim().length >= 2){
            setCategories(c => [inputValue, ...c]);
        }
        setInputValue("");
        
    }

    return (
       <form onSubmit={handleSubmit}>
           <input 
                type="text" 
                placeholder='Add a new category'
                value={inputValue}
                onChange={handleInputChange}
            />  
       </form>
    )
}


//Implementando propTypes
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}