import React, { useState, useEffect } from "react";

// cleanup function
// First time event listener is setup on page reload
// When width is change setWidth is called, when setWidth is called again useEffect is called
// This leads to tons of even listeners being setup hence memory leak
// To solve this we can remove the eventListener each time we add it.
const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const changeSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <>
      <h3>Width</h3>
      <h4>{width}</h4>
    </>
  );
};

export default UseEffectCleanup;
