import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completedTodo, deleteTodo, updateTodo } from "../features/todo/todoSlice";

const TodoItem = () => {
  const [editTodo, setEditTodo] = useState('');
  const [editId, setEditId] = useState(null);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  // when click update button
  const handleEditButton = (todo) => {
    setEditId(todo.id);
    setEditTodo(todo.title);
  }

  const saveEdit = () => {
    dispatch(updateTodo({ id: editId, title: editTodo }));
    setEditId(null);
    setEditTodo("");
  }

  return (
    <ul className="max-w-xl mx-auto mt-6 space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
        >
          {todo.id === editId ? (
            <>
              <input
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
              <button
                className="ml-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                onClick={saveEdit}
              >
                💾
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(completedTodo(todo.id))}
                  className="w-5 h-5"
                />
                <span
                  className={`text-gray-900 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                >
                  {todo.title}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEditButton(todo)}
                  className="px-3 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition"
                >
                  ✏️
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="px-3 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
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

export default TodoItem;