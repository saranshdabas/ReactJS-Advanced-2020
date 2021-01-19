//Reducer takes 2 arguments, old state and action and returns updated state
export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
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
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalMsg: "Item removed",
    };
  }

  //If none of the action matches throw error
  throw new Error("No action found");
};
