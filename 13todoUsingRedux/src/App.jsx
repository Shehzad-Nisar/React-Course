import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-300 text-center m-5 p-5 rounded-2xl hover:bg-blue-500 hover:text-white'>hello </h1>
    </>
  )
}

export default App
