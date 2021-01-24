import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  //Use params gives a string, even though id is number in data
  const { id } = useParams();
  const [person, setPerson] = useState("Default person");
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setPerson(newPerson);
  }, []);
  return (
    <div>
      <h2>{person.name}</h2>
      <Link className="btn" to="/people">
        Back to people
      </Link>
    </div>
  );
};

export default Person;
