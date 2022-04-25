
//import axios from "axios";
export const increment = (dat) => {
   
    return {
        type: 'INCREMENT',
        payload: dat
        
}        
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const islogged = () => {
    return { 
        type: 'SIGN_IN'
    }
}
