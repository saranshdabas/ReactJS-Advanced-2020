import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

//Conditional rendering with error and loading

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        //Error handling type 1, 404 etc (fetch api format)
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }

        setLoading(false);
        setError(true);
        throw new Error(resp.statusText);
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      //Error handling type 2, network issues(fetch api format)
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3>Error...</h3>
      </>
    );
  }

  return (
    <>
      <h3>{user}</h3>
    </>
  );
};

export default MultipleReturns;
