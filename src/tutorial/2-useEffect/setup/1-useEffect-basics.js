import React, { useState, useEffect } from "react";

//UseEffect by default runs after each re render
//It happens when we change state or initial page loading

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //Second argument is dependency, it says when do we want to call useEffect
  //If given empty [], then useEffect is only called at initial page load
  //In this case useEffect will only be called when value changes
  useEffect(() => {
    if (value > 0) {
      document.title = value;
    }
  }, [value]);

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
