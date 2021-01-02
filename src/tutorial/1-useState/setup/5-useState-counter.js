import React, { useState } from "react";

//Functional Update - we use a fn inside setCount to return the new value
//The problem with normal setCount will be that it is async, if we click multiple times and add a timer, it will only increment by 1
//Functional update is sync, i.e it will always take the updated value
const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setTimeout(() => {
      //setCount(count + 1);

      //Functional update
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 2000);
  };

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
      <button className="btn" onClick={increment}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
