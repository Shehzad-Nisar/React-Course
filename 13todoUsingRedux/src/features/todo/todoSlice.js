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
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((eachTodo)=> eachTodo.id=== action.payload.id? eachTodo.payload.title=action.title.payload:eachTodo)
        }
    }
})