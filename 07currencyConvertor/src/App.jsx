import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {InputBox} from './components/index.js'
import useCurrencyDetails from './Hooks/useCurrencyDetails.js'

function App() {

  const [amount , setAmount] = useState(100)
  const [convertedAmount , setConvertedAmount]= useState(0)
  const [from , setFrom ] = useState("usd")
  const [to , setTo] = useState('pkr')
  const fetchRates = useCurrencyDetails(from)
  const options = Object.keys(fetchRates);
  
  
  //swapping function which just swaps values on pressing button 
  function swap(){
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  //function for conversion :

  const convert = ()=>{
    setConvertedAmount(amount * fetchRates[to])
    

  }
  
  


  
  

  

  return (
    <>
    
      
    </>
  )
}

export default App
