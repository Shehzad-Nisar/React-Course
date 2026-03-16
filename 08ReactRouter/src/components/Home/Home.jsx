
import { Link,NavLink } from "react-router-dom"


const Home = () => {
  return (
   <>
   <div className="bg-yellow-400 flex justify-center" >
    <ul className=" w-full flex gap-4 p-2 text-2xl text-black justify-between">
      <li><NavLink className={({isActive})=> `hover:text-orange-500 ${isActive ? "text-orange-600 font-bold" : ""}`} to="/">Home page</NavLink></li>
      <li><NavLink  className={({isActive})=> `hover:text-orange-500 ${isActive ? "text-orange-600 font-bold" : ""}`}  to="/about">About section</NavLink></li>
      <li><NavLink  className={({isActive})=> `hover:text-orange-500 ${isActive ? "text-orange-600 font-bold" : ""}`} to="/footer">footer section</NavLink></li>
      <li><NavLink  className={({isActive})=> `hover:text-orange-500 ${isActive ? "text-orange-600 font-bold" : ""}`} to="/user">user</NavLink></li>
    </ul>

    

   
   </div>
   <h1>home page :</h1>
   
   
   
   </>
  )
}

export default Home
