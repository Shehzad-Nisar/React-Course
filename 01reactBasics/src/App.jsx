import React, { useState } from "react";
import Button from './component/Button.jsx'

function App() {
  const [count, setCount] = useState(0);

  // Function recreated on every render
  const increment = () => {
    console.log("Increment clicked");
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <Button onClick={increment} />
      <button onClick={() => setCount(count + 10)}>Parent Update</button>
    </div>
  );
}

export default App;