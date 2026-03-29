import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.trim() === '') return
    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full">
      <input
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-300
                   transition duration-200 w-full"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md
                   hover:bg-indigo-700 active:scale-95 transition transform duration-200 font-semibold"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm