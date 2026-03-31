import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = [{
    id: nanoid(),
    title: "My first todo",
    date: "3/31/2026",
    toggle: false
}]

export const todoSlice = createSlice({
    initialState,
    name:'todo',
    reducers: {
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                date: action.payload.date,
                toggle: false
            }
            initialState.push(todo)
        
          
        }
    }
})