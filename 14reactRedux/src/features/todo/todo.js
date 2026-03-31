import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
    todos: [
        {id: nanoid(), title: "first todo", date : new Date().toLocaleDateString() , completed: false}
    ]
}

export const todoSlice = createSlice({
    initialState,
    name:'todo',
    reducers: {
        addTodo:(state,action)=>{
            if (!action.payload.title) return; 
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                date: new Date().toLocaleDateString(),
                completed: false
            }
            state.todos.push(todo)
        
          
        }
    }
})


export const  {addTodo} = todoSlice.actions

export default todoSlice.reducer;
