import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

//Use reducer is more structural way to handle state, we define the structure of state
//We handle all the changes in state in one place (reducer fn)
//Reducer fn is called when we dispatch an action

const defaultState = {
  people: [],
  showModal: false,
  modalMsg: "",
};

//Reducer takes 2 arguments, old state and action and returns updated state
const reducer = (state, action) => {
  if (action.type === "ITEM_ADD") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalMsg: "Item added",
    };
  }
  if (action.type === "NO_ITEM") {
    return {
      ...state,
      showModal: true,
      modalMsg: "Please enter a value",
    };
  }

  //If none of the action matches throw error
  throw new Error("No action found");
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "NO_ITEM" });
    } else {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ITEM_ADD", payload: newPerson });
    }
  };
  return (
    <>
      {state.showModal && <Modal message={state.modalMsg} />}
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
      {state.people.map((person) => {
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
