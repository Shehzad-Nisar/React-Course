
import { useEffect, useState } from "react";
import Child from "./assets/Components/child"
import SearchFilter from "./assets/Components/SearchFilter";

function App(){


  let age = 22;
  let uni = "University of karachi."


  const [count , setCounter] = useState(0);

  const [user, setUser] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data)=> setUser(data));



  }, [])
  
  



  return (
  <>
   
   <h1>Wellcome to Website.</h1>
   <Child  name= "Shehzad Nisar"
           ageValue = {age}
           university = {uni} />

   <button onClick={()=> setCounter(count+1)}>Counter : {count}</button>

   <br />
   <br />
  <h3>User information System</h3>
  {user.map((user) => (
  <div
    key={user.id}
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
    }}
  >
    <h3>{user.name}</h3>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Website:</strong> {user.website}</p>
  </div>
))}

<SearchFilter/>

    
    
  
  
  </>)
   

}

export default App;