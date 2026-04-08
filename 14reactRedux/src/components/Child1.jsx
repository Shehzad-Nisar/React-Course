import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../features/reducers/reducerSlice.js';

const Child1 = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // Dispatch on input change
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(update(name));
    setName("");
  };

  return (
    <div className="bg-green-600 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-64 w-full md:w-1/2">
      <form className="w-full flex flex-col items-center" onSubmit={handleChange}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="p-2 w-full md:w-3/4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
        >
          Update
        </button>
      </form>
      <p className="text-white mt-4 font-semibold">
        Current Input: {name}
      </p>
    </div>
  );
};

export default Child1;
