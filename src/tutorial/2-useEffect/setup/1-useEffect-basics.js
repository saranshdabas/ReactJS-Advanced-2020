import React, { useState, useEffect } from "react";

//UseEffect by default runs after each re render
//It happens when we change state or initial page loading

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //Title will change after we click and value increments and component re renders
  useEffect(() => {
    if (value > 0) {
      document.title = value;
    }
  });

  return (
    <>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
