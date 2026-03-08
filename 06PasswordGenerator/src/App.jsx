import React, { useCallback, useEffect, useState } from 'react'

const App = () => {

  const [password , setPassword] = useState("ddddd");
  const [numAllowed,setnumAllowed] = useState(true);
  const [charAllowed,setCharAllowed] = useState(true);
  const [length, setLength] = useState(8)

  useCallback(()=>{
    let pass = '';
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i < str.length; i++){
      console.log(str.charAt(i))
    }
    

  },[length,numAllowed,charAllowed,setPassword])


  return (
   <>

   <div className='w-full max-w-sm mx-auto bg-gray-800 shadow-md rounded-lg px-4 py-4 my-4 text-orange-500'>
    <h1 className='text-center text-white py-4'>Password Generator</h1>
    <div className='flex shadow-2xl rounded-lg overflow-hidden mb-4'>
      <input
       type="text" 
       placeholder= {password}
       className='outline-none w-full py-1 px-1 bg-white text-black'
        />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        




    </div>

    <div className='flex text-sm gap-x-1.5 ml-0'>
      <input 
      type="range"
      max={50}
      min={6}
      className='cursor-pointer'
      value={length} // length = 8
      onChange={(e) => setLength(e.target.value)}
      step={1}
      /> <label htmlFor="length">Length:{length}</label>
       <input 
       type="checkbox"
       defaultChecked = {numAllowed}
       

      onChange={()=> {
        setnumAllowed(prev=>!prev)
      }}
       /> <label htmlFor="number">Number</label>

      <input
       type="checkbox" 
       defaultChecked = {charAllowed}
       onChange={()=>{
        setCharAllowed(prev= !prev)
       }}
       /><label htmlFor="characters">Characters</label>

      
    </div>
    
    </div>
   
   
   </>
  )
}

export default App
