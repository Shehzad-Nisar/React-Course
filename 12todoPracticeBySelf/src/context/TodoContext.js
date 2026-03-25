import { createContext, useContext } from "react";


const TodoContext = createContext({
    todos: [
        {id:1,
         todoMsg: 'learn any language.',
         completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    completeTodo: (id)=>{},
    deleteTodo:(id)=>{},
})

const TodoContextProvider = TodoContext.Provider;

const useTodo=()=>{
    return useContext(TodoContext);
}

export {TodoContextProvider,TodoContext,useTodo};