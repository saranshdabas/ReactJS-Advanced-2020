import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

//Using Async fn for API request because we need to execute step by step
//We can't move on until we recieve response hence we use await
const UseEffectFetchData = () => {
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    const temp = await fetch(url);
    const res = await temp.json();
    setPeople(res);
  };

  //To avoid inf loop we pass empty dependency array
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {people.map((person) => {
          const { id, login, avatar_url, html_url } = person;
          return (
            <li key={id}>
              <img src={avatar_url}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
