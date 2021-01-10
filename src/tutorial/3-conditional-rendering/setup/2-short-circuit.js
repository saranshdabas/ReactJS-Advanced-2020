import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("ABC");

  return (
    <>
      <h2>short circuit</h2>
      <h3>{text || "Saransh"}</h3>
      {text && <h3>{text}</h3>}
      {!text && <h3>Hello world</h3>}
    </>
  );
};

export default ShortCircuit;
