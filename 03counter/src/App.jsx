import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






const App = () => {


  const [value, setValue ]=useState(5);
  const [counter, setCounter] = useState(10);

  const addValue = () => {
 
  setCounter(counter+1)
  console.log(counter+1)
  }




  const decValue = () =>{
    console.log("dec button clicked",value-1)
    if(value >= 1){
      setValue(value-1)
    }else {
      alert("counter should not less than 0 has met.")
    }
   
  }


  const incValue = () => {
    console.log("clicked", value+1)
    if(value<= 15-1){
      setValue(value+1)
    }else{
      alert("counter should not more then 15 condition has met.")
    }


 


  }
  return(
    <>
    <h1>Counter Project to observe useState works </h1>
    <h2>Value is {counter}</h2>
    <button onClick={addValue}>add value</button>


    <button onClick={()=> {
      console.log(counter-1);
      setCounter(counter-1)
     
    }}>remove value</button>


    <h1>Assignment : conditional counter</h1>
    <h3>counter value  : {value}.</h3>
    <button onClick={incValue}>incValue</button>
    <button onClick={decValue}>decValue</button>
   
    </>
  )
}


export default App
