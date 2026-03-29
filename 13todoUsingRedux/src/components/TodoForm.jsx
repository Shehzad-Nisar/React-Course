import React, { useState } from 'react'
import {addTodo} from "../features/todo/todoSlice"
import { useDispatch } from 'react-redux'

const TodoForm = () => {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(todo.trim()==="") return
        dispatch(addTodo(todo))
        setTodo("")
    }


  return (
   <>
   <form  onSubmit={handleSubmit} className="flex gap-2">
      
      <input 
        type="text"
        placeholder="Add your todo here..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400
                   transition duration-200"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />

      <button type='submit'
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg 
                   hover:bg-indigo-600 active:scale-95 transition duration-200"
      >
        Add
      </button>

    </form>
   
   
   
   
   </>
  )
}

export default TodoForm
