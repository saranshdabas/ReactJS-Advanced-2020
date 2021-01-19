import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setShowModal(true);
    } else {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
    }
  };
  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn">add</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
