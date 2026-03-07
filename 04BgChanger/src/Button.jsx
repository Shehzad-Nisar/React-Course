
const Button = ({color,label,setColor}) => {

    
   


  return (
    
        <button className={` w-full flex justify-center ${color} border-black rounded-2xl`} onClick={() => setColor(color)}  >{label} 
        </button>
        
     
    
  )
}

export default Button
