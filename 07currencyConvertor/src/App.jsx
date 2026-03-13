import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {InputBox} from './components/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-red-500 text-4xl ' >Currency convertor</h1>
      <InputBox/>
    </>
  )
}

export default App
