let initialState = " ";
const counter = (state=initialState, action) =>
{
    switch(action.type) {
        case 'INCREMENT':
           
           state = action.data;
          // alert(val);
            return state;
            
            case 'DECREMENT':
                 state = null;
              return state;
                default:
                    return state;
    }
}

export default counter;
