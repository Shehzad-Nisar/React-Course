import { useState } from 'react'
import {TodoForm,TodoItem} from './components/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 return (
     <div className="min-h-screen bg-linear-to-br from-teal-400 via-cyan-400 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl space-y-6">
        {/* Input Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Todo App
          </h1>
          <TodoForm />
        </div>

        {/* Todo List Card */}
        <div className="bg-slate-50 rounded-3xl shadow-2xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Todos</h2>
          <TodoItem />
        </div>
      </div>
    </div>
  )
}

export default App
