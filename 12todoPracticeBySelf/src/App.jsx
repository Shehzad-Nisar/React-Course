import { useState } from 'react'
import './App.css'
import {TodoContext,TodoContextProvider,useTodo} from './context/index'

function App() {
  const [todos,setTodos] = useState([]);

  // add todo function

  const addTodo = (todo) =>{
    setTodos((Prevtodos)=> [{id:Date.now(),...todo},...Prevtodos])
  }

  // update todo function 

  const updateTodo =(id,todo) =>{
    setTodos((prevTodos)=> prevTodos.map((eachTodo)=>eachTodo.id === id ? {...eachTodo,...todo}: eachTodo))
  }

  //deletedTodo function work:
  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((eachTodo)=>eachTodo.id!=id))
  }

  //completedTodo function:
  



  return (
    <TodoContextProvider value= {{addTodo , updateTodo,deleteTodo,completeTodo}}>
      <div className="bg-[#4a5759] min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2  text-[#f7e1d7]">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
