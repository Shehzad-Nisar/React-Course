import React, { useCallback, useEffect, useState } from 'react'

const App = () => {

  const [password , setPassword] = useState("ddddd");
  const [numAllowed,setnumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [length, setLength] = useState(8)

  const GeneratePassword = useCallback(()=>{

    let pass = "";
    //pass password values to string :
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //add special characters to password string if allowed:
    if(charAllowed) 
      str+="!@#$%&()-+={}[]<>?/~"

    //add numbers to password string if numbers are allowed:
    if(numAllowed)
      str+='0123456789';
    
    for (let index = 0; index < length ; index++) {

      const val = Math.floor(Math.random()*((str.length)-0+1)+0);

      pass += str.charAt(val);
    }
    
    setPassword(pass)

  },[numAllowed,charAllowed,length,setPassword])

  const copyToClipboard = ()=>{
    
    navigator.clipboard.writeText(password)
    .then(() => alert("Password copied!"))
    .catch(err => console.log("Failed to copy: ", err));


  }


  useEffect(()=>{

    GeneratePassword();


  },[length,numAllowed,charAllowed,setPassword])

 



  return (
   <>

   <div className='w-full max-w-sm mx-auto bg-gray-800 shadow-md rounded-lg px-4 py-4 my-4 text-orange-500'>
    <h1 className='text-center text-white py-4'>Password Generator</h1>
    <div className='flex shadow-2xl rounded-lg overflow-hidden mb-4'>
      <input
       type="text" 
       placeholder= {"Generate your password:"}
       value={password}
       className='outline-none w-full py-1 px-1 bg-white text-black'
       onChange={(e) => setText(e.target.value)}
       readOnly
        />

        <button  onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:to-black'>copy</button>

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
        setnumAllowed(prev =>!prev)
      }}
       /> <label htmlFor="number">Number</label>

      <input
       type="checkbox" 
       defaultChecked = {charAllowed}
       onChange={()=>{
        setCharAllowed(prev=> !prev)
       }}
       /><label htmlFor="characters">Characters</label>

      
    </div>
    
    </div>
   
   
   </>
  )
}

export default App
