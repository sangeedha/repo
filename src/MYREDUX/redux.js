import React from "react";
import {useState} from 'react';
function Redux()
{
    const[text,setText] = useState("");
    const handleChange = (e) => {
        let value = e.target.value;
       setText(value);
       
       
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(text);
        
    }
    return(

      <form onSubmit={handleSubmit}>
          <label>
              enter the value:
              <input type = "text" 
              onChange = {handleChange}
              />
              <input type = "submit" />
          </label>
      </form>
       
    
    );
}
export default Redux;