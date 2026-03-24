import {TodoContext,TodoProvider,useTodo} from './contexts/index'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [todos,setTodos] = useState([])

  //addToDo to todo list /array
  const addToDo = (toDo)=> {
    setTodos((prev)=> [{id: Date.now(),...toDo},...prev]);

  }
  //update todo
  const updatedToDo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? todo: prevTodo))

  }

  //delete todo

  const deletedToDo = (id)=>{
    setTodos((prevTodos)=> prevTodos.filter((prevobj)=> prevobj.id != id))
  }

  //toggleCompleted
  const toggleCompleted=(id)=>{
    setTodos((prevTodo)=> prevTodo.map((prevObj)=> prevObj.id === id ? {
      ...prevObj,completed: !prevObj.completed
    } : prevObj))
  }

  // when the components mounted then the todos return to me
  // which mean we are trying get todos when we need  :

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0 ){
      setTodos(todos);
    }
    

  },[])



  //now we should pass new todos or updated todos to local storage so :
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])


  return (
    <TodoProvider value = {{todos,addToDo,updatedToDo,deletedToDo,toggleCompleted}} >
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
