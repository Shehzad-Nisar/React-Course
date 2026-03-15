import { useState } from 'react'

import './App.css'

import {InputBox} from './components/index.js'
import useCurrencyDetails from './Hooks/useCurrencyDetails.js'

function App() {

  const [amount , setAmount] = useState(0)
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
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat '
    style={{backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg)`}}
    >
      <div className='w-full flex justify-end-safe'>
        <div className='w-full max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm bg-white/30 border-gray-600'>

        <form id= "form" onSubmit={(e)=>{
          e.preventDefault()
          convert()

        }}>
          <div className='w-full mb-1'>

            <InputBox
            
            
            label= "From"
            amount = {amount}
            onChangeAmount = {(amount)=> setAmount(amount)}
            onChangeCurrency = {(currency)=> setFrom(currency)}
            currencyOptions = {options}
            selectedCurrency = {from}
             />
          </div>
          <div className='w-full h-0.5 relative'>
            <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5  ' 
            onClick={swap} type='button'>Swap</button>
          </div>
          <div className='w-full mb-1'>

            <InputBox
            id = "output"
            label= "To"
            amount = {convertedAmount}
            onChangeAmout = {(amount)=> setConvertedAmount(amount)}
            onChangeCurrency = {(currency)=> setTo(currency)}
            currencyOptions = {options}
            selectedCurrency = {to}
            amountDisable

             />
          </div>
          <button type='submit'
          className='w-full bg-blue-600 text-white py-4 px-3 rounded-lg'
          
          >Convert from {from.toUpperCase()} to {to.toUpperCase()}</button>






        </form>

        </div>
      </div>


    </div>
    
      
    </>
  )
}

export default App
