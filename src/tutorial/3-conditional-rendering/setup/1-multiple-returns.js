import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return <h2>Hello World!</h2>;
  }
};

export default MultipleReturns;
