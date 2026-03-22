import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            toDo : 'to do msg',
            completed: false
        }
    ],
    addToDo: (toDo)=>{},
    updatedToDo: (id,toDo)=>{},
    deletedToDo: (id)=>{},
    toggleCompleted: (id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext)

}