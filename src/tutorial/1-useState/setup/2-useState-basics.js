import React, { useState } from "react";

//Setting variable in a different way (Using state)
//Use state also returns a fn that can be used to change the value of variable and re rerender
const UseStateBasics = () => {
  const [title, setTitle] = useState("Hello world!");
  const changeTitle = () => {
    if (title == "Hello world!") {
      setTitle("Hello kitty!");
    } else {
      setTitle("Hello world!");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={changeTitle}>
        Click to change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
