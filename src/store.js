import * as redux from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from "redux";
//import { separateGet } from './separate';
//import { createStore} from "redux";

import axios from "axios";




const dataReducer = (state={data:null}, action) => {
    console.warn("In reducer", action.data);
    switch(action.type) {
        case 'setdata':
            return {data:action.data};
            default:
                return state;
    }
}

const rootReducer = redux.combineReducers(
    {
        
        storage: dataReducer
    }
);
const store = createStore(rootReducer, applyMiddleware(thunk));

//const store = createStore(rootReducer);
export default store;