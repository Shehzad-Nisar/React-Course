import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './Button'

import './App.css'

function App() {
  
  const [color,setcolor] = useState("bg-lime-700");

  return (
    <>
      <div className={`h-screen w-screen ${color} text-white flex justify-center items-center`}>
      <h1 className='bg-green-950 text-2xl rounded-4xl p-4'><b><i>Background Changing Buttons</i></b></h1>
      <nav className='absolute bottom-0 w-full flex justify-around p-4 bg-green-900 rounded-3xl shadow-black-900 mb-5 mx-7'>
      <Button setColor = {setcolor} color="bg-red-500" label="Red" />
      <Button setColor = {setcolor} color="bg-blue-500" label="Blue" />
      <Button setColor = {setcolor} color="bg-green-500" label="Green" />
      <Button setColor = {setcolor} color="bg-yellow-500" label="Yellow" />
      <Button setColor = {setcolor} color="bg-purple-500" label="Purple" />
      <Button setColor = {setcolor} color="bg-pink-500" label="Pink" />
      </nav>
    </div>
    
     <br />
    </>
  )
}

export default App
