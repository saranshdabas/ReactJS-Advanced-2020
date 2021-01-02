import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Saransh",
    age: 24,
    message: "Hello world!",
  });

  //Using spread operator to copy values into new object and overrwriting message property
  const changeMessage = () => {
    setPerson({ ...person, message: "Hello Kitty!" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
