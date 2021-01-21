import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

//Context is like global variable, we can access it anywhere
//To use it we need to wrap our Root component into Context.Provider component and pass a value
//This value will then be accessible everywhere in the component tree;

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    //Wrapping root component inside PersonContext and passing removePerson as an object property
    //We can pass many more fn and values as object properties.
    <PersonContext.Provider value={{ removePerson }}>
      <h3>Context API</h3>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  //De-structring fn from the Context.
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
