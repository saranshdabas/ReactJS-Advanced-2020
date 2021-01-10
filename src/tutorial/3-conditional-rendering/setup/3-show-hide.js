import React, { useState, useEffect } from "react";

// Displaying Item component conditionally
// Each time item component is rendered a listener is added so we need to cleanup
const ShowHide = () => {
  const [showWidth, setShowWidth] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShowWidth(!showWidth)}>
        Show Width
      </button>
      {showWidth && <Item />}
    </>
  );
};

const Item = () => {
  const [value, setValue] = useState(window.innerWidth);
  const changeValue = () => {
    setValue(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changeValue);
    return () => {
      window.removeEventListener("resize", changeValue);
    };
  }, []);
  return (
    <>
      <p>Width: {value} px</p>
    </>
  );
};

export default ShowHide;
