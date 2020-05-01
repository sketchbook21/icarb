import { pizzaList } from "../data/pizzaConstants";
import { pizzaSize, crustType } from "../data/generalConstants";

// Action type constants
const CHOOSE_SIZE = "CHOOSE_SIZE";
const CHOOSE_CRUST = "CHOOSE_CRUST";

// Action creators

const chooseSize = (sizeId) => {
  return {
    type: CHOOSE_SIZE,
    sizeId,
  };
};

const chooseCrust = (crustId) => {
  return {
    type: CHOOSE_CRUST,
    crustId,
  };
};

// Reducer and its initialState

const initialState = {
  pizzaSize,
  crustType,
  pizzaList,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_SIZE:
      let newPizzaSizeState = state.pizzaSize.concat();
      if (action.sizeId === 1) {
        newPizzaSizeState[0]["active"] = true;
        newPizzaSizeState[1]["active"] = false;
      } else {
        newPizzaSizeState[0]["active"] = false;
        newPizzaSizeState[1]["active"] = true;
      }
      return { ...state, pizzaSize: newPizzaSizeState };
    case CHOOSE_CRUST:
      let newCrustTypeState = state.crustType.concat();
      if (action.crustId === 1) {
        newCrustTypeState[0]["active"] = true;
        newCrustTypeState[1]["active"] = false;
      } else {
        newCrustTypeState[0]["active"] = false;
        newCrustTypeState[1]["active"] = true;
      }
      return { ...state, crustType: newCrustTypeState };
    default:
      return state;
  }
};

// Export statement

export { pizzas, chooseSize, chooseCrust };
