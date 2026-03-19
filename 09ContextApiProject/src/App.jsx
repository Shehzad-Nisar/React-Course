import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import {Login,Profile} from './index.js'

function App() {

  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <div className='justify-center-safe'>
      <Profile/>
      <Login/>
     </div>
      

    </UserContextProvider>
    
  )
}

export default App
