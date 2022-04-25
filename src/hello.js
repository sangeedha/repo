import React from "react";
import axios from "axios";
import {connect} from 'react-redux';
import * as reredux from 'react-redux';
import { separateGet } from "./separate";
import {increment} from './act';
 
function Hello(props)
{
    let state = {data:[]};
    
    return (
        <div>
            <button onClick={props.setdata1}>Get Data</button>
           {props.data.map((x,i) => <div key = {i}> {x.title}</div>)}
        </div>
    );
}

/**/

const separateGet = (name) => {
    console.warn("In separateGet");
    return(dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
            console.log(name, getState());
            dispatch({type:'setdata', data:result.data});
        })
    }   
}

const mapStateToprops = (state) => {
    console.warn("In stateToprops", state.storage);
    return {
        data:state.storage.data || []
        
    };
}
const mapDispatchToprops = (dispatch) => {
    console.warn("In dispatchToprops");
    return {
        setdata1: (data) => 
        {
          dispatch(separateGet());
        }
    };
}
export default connect(mapStateToprops, mapDispatchToprops)(Hello);