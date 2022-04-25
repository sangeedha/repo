import { createSlice} from '@reduxjs/toolkit'
const initialstate = {
    value: ''
}
const vaccineSlice = createSlice({
    name:'vaccine',
    initialstate,
    reducers: {
        addBenef(state, action) {
            state.value = action.payload
            console.log("payload", state.value)
        },
    },
})
export const { addBenef } = vaccineSlice.actions
export default vaccineSlice.reducer
// export const addBenef = createAction('vaccine/addBenef');
// const vaccineReducer = createReducer(initialstate, (builder)=>
// {
//     builder.addCase(addBenef, (state,action) =>
//     {
//        // console.log("payload",action.payload);
//         state.value = action.payload
//         console.log("state value",state.value);
        
//     })
//     .addDefaultCase ((state,actoin)=> {})
// })
// export default vaccineReducer;