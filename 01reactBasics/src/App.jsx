import React, { useState } from 'react'
import useCurrencyInfo from './Hook/useCurrencyInfo'


const App = () => {

  const [amount , setAmount] = useState(0);

  
  


  


  return (
    <>
     <div className=''>
      <input type="number"
       value={amount}
       placeholder='amount'
       onChange={(e)=> setAmount(e.target.value)}
      
      />
     </div>



    

    
    
    
    </>
  )
}

export default App
