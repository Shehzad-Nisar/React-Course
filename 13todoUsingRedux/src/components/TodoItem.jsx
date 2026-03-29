import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, completedTodo } from '../features/todo/todoSlice'

const TodoItem = () => {
  const dispatch = useDispatch()

  // Safely get todos; default to empty array if undefined
  const todos = useSelector((state) => state.todos?.todos ?? [])

  return (
    <ul className="space-y-3 w-full">
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No todos yet. Add some!</p>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md
                       hover:bg-cyan-50 transition duration-200 w-full"
          >
            {/* Left side: Checkbox + Todo text */}
            <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(completedTodo({ id: todo.id }))}
                className="w-5 h-5 text-teal-500 accent-teal-500"
              />
              <span
                className={`text-gray-800 text-lg font-medium ${
                  todo.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {todo.title}
              </span>
            </div>

            {/* Right side: Update + Delete buttons */}
            <div className="flex gap-2">
              <button
                className="bg-orange-400 text-white px-3 py-1 rounded-2xl hover:bg-orange-500
                           active:scale-95 transition duration-200 font-semibold"
              >
                Update
              </button>

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="bg-red-500 text-white px-3 py-1 rounded-2xl hover:bg-red-600
                           active:scale-95 transition duration-200 font-semibold"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  )
}

export default TodoItem