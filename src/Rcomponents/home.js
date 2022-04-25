import React from 'react'
import {useState} from 'react';

function Home(props) {
    console.warn("home data", props.data);
 
  
    
    const[text,setText] = useState("");   
    const handleChange = (e) => {
        let value = e.target.value;
       setText(value);
       
       
    }
    
  /*  const recieveData=() =>
    {
        const val = {
            recdata: props.data
        }   
        console.warn("recived dta", val.recdata)
    


    }*/
   /* const handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(text);
        
    }*/
  
    return (
        <div>
           
            <h1>Home Component</h1>
            <h2>recieced data:{props.data}</h2>
            
           
            
          <label>
              enter the value:
              <input type = "text" 
              onChange = {handleChange}
              />
              
          </label>
      
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({text})}
                        }>
                        Add To Cart
                    </button>
                    
                   
        </div>
           
    )
}
export default Home
