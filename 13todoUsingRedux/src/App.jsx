import { useState } from 'react';
import { TodoForm, TodoItem } from './components/index';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-200 p-6 font-sans">
      {/* Container starts from top */}
      <div className="w-full max-w-3xl mx-auto space-y-8">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          My Todo App
        </h1>

        {/* Input Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Task</h2>
          <TodoForm />
        </div>

        {/* Todo List Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Todos</h2>
          <TodoItem />
        </div>

      </div>
    </div>
  )
}

export default App;