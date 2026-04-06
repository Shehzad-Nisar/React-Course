import React from 'react';
import { useSelector } from 'react-redux';

const Child2 = () => {
  const data = useSelector((state) => state.data); // correct slice key

  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-64 w-full md:w-1/2">
      <h2 className="text-lg font-semibold mb-4 text-center">
        This data came from global Redux store:
      </h2>
      <p className="text-xl font-bold">
        Username is: {data[0].name}
      </p>
    </div>
  );
};

export default Child2;