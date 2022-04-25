import { ADD_TO_CART } from '../Rconstants'
const initialState = {
    cardData:[]
}

export default function cardItems(state = [], action) {
    
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer data", action.data);
            return [
                ...state,
               {cardData:action.data}
            ]
             //console.warn("reducer",action)
        default:
            return state
    }


}
