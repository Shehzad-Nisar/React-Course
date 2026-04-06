import { useState } from 'react'
import './App.css'
import Parent from './components/Parent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="h-screen w-screen bg-yellow-800 flex flex-col">
      {/* Header */}
      <h1 className="text-white text-2xl font-bold p-4">Heading in App</h1>
      
      {/* Parent component */}
      <Parent />
    </div>
    
    
    </>
  )
}

export default App
