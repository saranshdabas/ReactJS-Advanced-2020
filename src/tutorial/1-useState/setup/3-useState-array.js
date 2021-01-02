import React from "react";
import { data } from "../../../data";

//Using filter to set only people who do not have the id which we are going to delete
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((people) => people.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((people) => {
        const { id, name } = people;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Remove all
      </button>
    </>
  );
};

export default UseStateArray;
