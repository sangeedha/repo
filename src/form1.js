import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react';
import Child from './child';
//passing data from child to parent thr' callback
 function Parent()
{
  const [name, setName] = useState("");
  const data = (childData) =>
  {
    setName(childData);
    alert(name, "hello");
  }
  return (
    <div>
      <h1>hi!</h1>
    <Child parentcall = {data}/>
    </div>
  )
}
export default Parent;

 