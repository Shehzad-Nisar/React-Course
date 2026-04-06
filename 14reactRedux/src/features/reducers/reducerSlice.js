import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data : [
        {name: 'shehzad', isPakistani: true, count: 0}
    ]
}

export const reducerSlice = createSlice({
    name: 'reducer',
    initialState,
    reducers : {
        update: (state,action)=>{
            state.data[0].count+=1;
            state.data[0].name = action.payload
        }
    }
})

export const {update} = reducerSlice.actions

export default reducerSlice.reducer