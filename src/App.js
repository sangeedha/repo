import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Outlet,Link,NavLink } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import { getByDisplayValue } from '@testing-library/react';
//import { useState } from 'react/cjs/react.production.min';
import {useSelector, useDispatch} from "react-redux";
//import {separateGet} from './actions';
import axios from 'axios';
import Comp from './comp';
import store from './reducer';
function App()
{
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.login);
  const dispatch = useDispatch();
  let status = "";
  const[text,setText] = useState("");   
  
  const handleChange = (e) => {
      let value = e.target.value;
      //value=value+1;
     setText(value);
  }
  

 return(
    <div>
      <h1> Entered string from reducer1: {counter} </h1>
      <label>
              enter the value:
              <input type = "text" 
              onChange = {handleChange}
              />
              
          </label>
      <button onClick= {() => dispatch({type: 'INCREMENT', data:text})} >Add</button>
      <button onClick= {() => dispatch({type: 'DECREMENT'})} >Delete</button>
      
      {
        logged? (<p>valuable info</p>):(<h1>please login</h1>)
      }
        
  
   <BrowserRouter>
      
    <Routes>
    <Route path = 'NextPage' element = {<Comp />} /> NextPage
    </Routes>
    
       <nav>
        <Link to = 'NextPage'>NextPage</Link>
        </nav>
      
              
    </BrowserRouter>
    </div>
  )
 
}
export default App;
/**/
 // <Comp />