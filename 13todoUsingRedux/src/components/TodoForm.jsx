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
        placeholder="Add your todo..."
        className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl shadow-inner
                   focus:outline-none focus:ring-2 focus:ring-teal-500
                   transition duration-200 w-full"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="bg-teal-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-teal-600
                   active:scale-95 transition transform duration-200 font-semibold"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm