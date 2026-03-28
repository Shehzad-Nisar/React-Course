import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: nanoid(),
            title: "first task!",
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id : nanoid(),
                title: action.payload,
                completed: false

            }
            state.todos.push(todo)

        },
        deleteTodo: (state,action) => {
           state.todos = state.todos.filter((todo)=> todo.id!= action.payload)
        },
        //trying to use find method approach which return first matching element then 
        // we can update that todo easily ...
        updateTodo: (state,action)=>{
            const todo = state.todos.find((e)=> e.id === action.payload.id);
            if(todo){
                todo.title = action.payload.title;
            }
            
        }
    }
})