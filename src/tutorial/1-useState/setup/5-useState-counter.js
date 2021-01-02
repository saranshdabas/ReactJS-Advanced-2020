import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Regular counter</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
