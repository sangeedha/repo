  import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react';



function MyForm1() {
    
    const[inputs,setName] = useState({});
    const handleSubmit=(event) => {
      event.preventDefault();
      //alert(inputs);
      console.log(inputs);

    }
    const handleChange=(e) => {
      const name=e.target.name;
      const value=e.target.value;
      setName(val =>({...val, [name]: value}))

    }
    return(
      <form onSubmit={handleSubmit}>
        <label>enter your name:
          <input type="text"
          name="username"
          value = {inputs.username || ""}
          onChange = {handleChange}
          />
        </label>
        <label>enter your age
        <input type= "number"
        name="age"
        value={inputs.age || ""}
        onChange={handleChange}
        />
        <input type="submit" />
        </label>
      </form>
    )
  }
  export default MyForm1;