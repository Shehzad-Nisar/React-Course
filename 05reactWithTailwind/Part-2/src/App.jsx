import { useState } from 'react'

import Menu from "./assets/components/Menu"

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Menu name = "Chakri road Rawalpindi" price= {180000} />
    <Menu />
   
      </>
  )
}

export default App
