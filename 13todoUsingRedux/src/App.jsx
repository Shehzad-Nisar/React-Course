import { useState } from 'react'
import {TodoForm} from './components/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Todo App
        </h1>

        <TodoForm />
      </div>
    </div>
    </>
  )
}

export default App
