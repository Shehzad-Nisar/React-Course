import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../features/reducers/reducerSlice.js';

const Child1 = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // Dispatch on input change
  const handleChange = (e)=>{
    e.preventDefault()
    dispatch(update(name));
    setName("")
  }

  return (
    <div className="bg-green-600 p-4 rounded-lg flex flex-col items-center justify-center h-full">
       <form action="" onSubmit={handleChange}>
      <input
        type="text"
        value={name}
        onChange= {(e)=> setName(e.target.value)}
        placeholder="Enter name"
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"

      
        
      />
      
     </form>
      <p className="text-white mt-4 font-semibold">Current Input: {name}</p>
    </div>
  );
};

export default Child1;