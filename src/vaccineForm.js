import './App.css';
import {addBenef} from './vaccineReducer'


import { useDispatch, useSelector } from 'react-redux';
function Vaccineform() {
const dispatch = useDispatch();
const vaccineselect=useSelector((state)=>state.value);
 return (
   <>
  <h1>New Reducer:{vaccineselect}</h1>
   <button onClick={()=>dispatch(addBenef("abi"))}>click</button>
   </>
 )
}

export default Vaccineform;
