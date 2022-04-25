import isloggedReducer from './islogged'
import counterReducer from './counter'
import {createstore, combineReducers} from 'redux'
const store = combineReducers({
    login: isloggedReducer,
    counter: counterReducer
});
export default store;