import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Parent from './form1'


import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import combineReducers from './reducer';
import { Provider } from 'react-redux';
import App from './App';
// const store = createStore(combineReducers);
import {configureStore} from '@reduxjs/toolkit'
import vaccineSlice from './vaccineReducer';
import Vaccineform from './vaccineForm'

/*import Hello from './hello';
import store  from './store';
import { Provider } from 'react-redux';cd
reportWebVitals()*/

/*ReactDOM.render(
  <Provider store = {st
  <React.StrictMod
<App />

</React.StrictMode>, 
</Provider>, document.getElementById('root')
);*/
const store = configureStore(
  {
    reducer: {
     vaccine:vaccineSlice.reducer
    }
  }
);
ReactDOM.render(
  <Provider store = {store}> 
  <React.StrictMode>
<Vaccineform />
</React.StrictMode>,
</Provider>,
 document.getElementById('root')
);
/*function Child(props)
{
return <h1>name, {props.name}</h1>;
}
function Parent() {
 return (
    <div>
      <Child name="sangee" />
    </div>
  );
}*/
/*function MyForm() {
  const [name, setName] = useState("");
  const handlesubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
    document.getElementById("demo").innerHTML = name;

    
  }
  return(
    <div>
    <form onSubmit = {handlesubmit}>
      <label>
        Enter your name:
        <input 
        type= "text"
        value = {name}
        onChange= {(e) =>{
           setName(e.target.value)
          
        }
      }
        />
      </label>
      <input type="submit" />
    </form>
    <p id = "demo"> </p>
    </div>
  )
}*/
      