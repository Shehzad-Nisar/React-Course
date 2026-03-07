import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
      className="min-h-screen w-full bg-amber-300 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('./public/bgImg.jpg')" }}
    >
      <h1 className="text-white text-4xl p-10">
        Background Image
      </h1>
    </div>
    </>
  )
}

export default App
