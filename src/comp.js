import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, islogged} from './actions';
function Comp()
{
    const counter = useSelector((state) => state.counter);
        const dispatch = useDispatch();
    /*const calll = () => {

        alert(counter);
    }*/
   
    return (
        <div>
        <h1>Passed String:{counter}</h1>
        
        </div>
    )
}
export default Comp;