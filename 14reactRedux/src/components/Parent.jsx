import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import { useSelector} from 'react-redux';

const Parent = () => {
 const data = useSelector((state) => state.data);
  return (
    <div className="bg-red-500 min-h-screen p-6 flex flex-col items-center">
      {/* Parent Heading */}
      <h1 className="text-white text-3xl font-bold mb-6">Parent Element</h1>
      <h2 className="text-white text-xl mb-6">
        Name change count is {data[0].count}.
      </h2>

      {/* Children Container */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Child 1 */}
        <Child1 />

        {/* Child 2 */}
        <Child2 />
      </div>
    </div>
  );
};

export default Parent;