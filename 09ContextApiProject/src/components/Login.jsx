import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";



const Login = () => {
    const [userName , setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    function clickSubmit(e) {
        e.preventDefault();
        setUser({userName,password});

        
        
        
    }

  return (
   <div>

   <h1 className="text-4xl font-extrabold ">Login Page</h1>
 
   <input type="text" placeholder="username" value={userName}
   className="border rounded-2xl p-2 mr-4 mt-5 text-center"
   onChange={(e)=>setUserName(e.target.value)}
   />
   <input type="text" placeholder="password" value={password}
   onChange={(e)=>setPassword(e.target.value)}
   className="border rounded-2xl p-2 mr-4 mt-5 text-center"
   /> <br />
   <button type="submit" 
   className="border-2 border-black rounded-xl pt-1 pb-1 bg-blue-700 text-white text-2xl mr-4 mt-5 text-center pl-2 pr-2"
   onClick={clickSubmit}>submit</button>
   
   
   
   
   
   </div>
  )
}

export default Login
