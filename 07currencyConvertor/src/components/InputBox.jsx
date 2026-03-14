import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onChangeAmount,
    onChangeCurrency,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable = false ,
    className = ""

}) => {


  const id = useId()
  return (

    <div className= {`bg-white p-3 rounded-lg text-sm flex ${className} text-left`} >
      <div className='w-1/2 '>
      <label htmlFor= {id} className='text-black/50 inline-block mb-2'>{label}</label>
      
      <input 
      id= {id}
      type="number"
      placeholder='Amount'
      value={amount}
      className='outline-none w-full bg-transparent py-1.5'
      disabled = {amountDisable}
      onChange={(e)=> onChangeAmount && onChangeAmount(Number(e.target.value))}
      />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className="text-black/50 inline-block mb-2">Currency Type</p>
      <select className='bg-gray-100 cursor-pointer  rounded-lg p-1 outline-none'
      value={selectedCurrency}
      onChange={(e)=> onChangeCurrency && onChangeCurrency(e.target.value)}
      disabled= {currencyDisable}
      >
         {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        
      </select>

      </div>
    </div>

  )
  
}

export default InputBox
