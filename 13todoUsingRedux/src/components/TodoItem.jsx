import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completedTodo, deleteTodo, updateTodo } from "../features/todo/todoSlice"

const TodoItem = () => {
  const [editTodo, setEditTodo] = useState('')
  const [editId, setEditId] = useState(null)
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleEditButton = (todo) => {
    setEditId(todo.id)
    setEditTodo(todo.title)
  }

  const saveEdit = () => {
    dispatch(updateTodo({ id: editId, title: editTodo }))
    setEditId(null)
    setEditTodo("")
  }

  return (
    <ul className="space-y-4">
      {todos.map(todo => (
        <li 
          key={todo.id} 
          className="flex items-center justify-between bg-gray-50 shadow-sm rounded-lg p-4 hover:shadow-md transition"
        >
          {editId === todo.id ? (
            <div className="flex items-center flex-1 gap-3">
              <input 
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              />
              <button 
                onClick={saveEdit} 
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center flex-1 gap-3">
                <input 
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(completedTodo(todo.id))}
                  className="w-5 h-5 accent-indigo-500"
                />
                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {todo.title}
                </span>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => handleEditButton(todo)}
                  className="px-3 py-1 border border-indigo-400 rounded-lg hover:bg-indigo-50 transition"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="px-3 py-1 border border-red-400 rounded-lg hover:bg-red-50 transition"
                >
                  ❌
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoItem