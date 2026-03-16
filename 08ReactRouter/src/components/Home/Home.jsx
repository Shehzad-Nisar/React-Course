
import { Link,NavLink } from "react-router-dom"


const Home = () => {
  return (
   <>
   <div className="bg-yellow-400 flex justify-center" >
    <ul className=" w-full flex gap-4 p-2 text-2xl text-black justify-between">
      <li><NavLink className={(isActive)=>{
       

      }} to="/">Home page</NavLink></li>
      <li><NavLink  to="/about">About section</NavLink></li>
      <li><NavLink  to="/footer">footer section</NavLink></li>
    </ul>

   
   </div>
   
   
   
   </>
  )
}

export default Home
