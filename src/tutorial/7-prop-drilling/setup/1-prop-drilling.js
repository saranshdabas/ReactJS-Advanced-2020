import React, { useState } from "react";
import { data } from "../../../data";

//Prop drilling is a problem
//If there is a chain of components and we want a call a fn from last component, we need to pass down that fn
//This problem is solved by Context API.
const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>Prop drilling</h3>
      <List people={people} removeItem={removeItem} />
    </section>
  );
};

//Even though List component don't need removeItem fn, it still needs it to pass it to SinglePerson component.
const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} removeItem={removeItem} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removeItem }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" onClick={() => removeItem(id)}>
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;
