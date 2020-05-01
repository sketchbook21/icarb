import { pizzaList } from "../data/pizzaConstants";
import { pizzaSize, crustType } from "../data/generalConstants";

// Action type constants
const CHOOSE_SIZE = "CHOOSE_SIZE";
const CHOOSE_CRUST = "CHOOSE_CRUST";

// Action creators

const chooseSize = (id) => {
  return {
    type: CHOOSE_SIZE,
    id,
  };
};

const chooseCrust = (id) => {
  return {
    type: CHOOSE_CRUST,
    id,
  };
};

// Reducer and its initialState

const initialState = {
  pizzaSize,
  crustType,
  pizzaList,
};

const setSelection = (array, id) => {
  const newArray = array.concat();
  newArray.forEach((item) => {
    if (item.id === id) {
      item["active"] = true;
    } else {
      item["active"] = false;
    }
  });
  return newArray;
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_SIZE:
      const newPizzaSize = setSelection(state.pizzaSize, action.id);
      return { ...state, pizzaSize: newPizzaSize };
    case CHOOSE_CRUST:
      const newCrustType = setSelection(state.crustType, action.id);
      return { ...state, crustType: newCrustType };
    default:
      return state;
  }
};

// Export statement

export { pizzas, chooseSize, chooseCrust };
