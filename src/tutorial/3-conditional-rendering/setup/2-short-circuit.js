import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [error, setError] = useState(false);

  return (
    <>
      <h2>short circuit</h2>
      <button className="btn" onClick={() => setError(!error)}>
        Toggle Error
      </button>
      {error ? <h3>Error...</h3> : <h3>No Error...</h3>}
    </>
  );
};

export default ShortCircuit;
