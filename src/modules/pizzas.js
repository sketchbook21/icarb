import { pizzaSize, crustType, pizzaStyle } from "../data/pizzaConstants";

// Action type constants
const CHOOSE_OPTION = "CHOOSE_OPTION";

// Action creators

const chooseOption = (category, id) => {
  return {
    type: CHOOSE_OPTION,
    category: category,
    id,
  };
};

// Reducer and its initialState

const initialState = {
  pizzaOptions: [...pizzaSize, ...crustType, ...pizzaStyle],
  subtotalItems: [],
};

const setSelection = (pizzaOptions, category, id) => {
  const newArray = pizzaOptions.concat();
  newArray.forEach((item) => {
    if (item.category === category) {
      if (item.id === id) {
        item["active"] = true;
      } else {
        item["active"] = false;
      }
    }
  });
  return newArray;
};

const addToSubtotal = (newPizzaOptionsState) => {
  const newSubtotalItems = newPizzaOptionsState.filter((item) => {
    return item.active === true;
  });

  return newSubtotalItems;
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_OPTION:
      const newPizzaOptionsState = setSelection(
        state.pizzaOptions,
        action.category,
        action.id
      );
      const newSubtotalItems = addToSubtotal(newPizzaOptionsState);
      return {
        ...state,
        pizzaOptions: newPizzaOptionsState,
        subtotalItems: newSubtotalItems,
      };
    default:
      return state;
  }
};

// Export statement

export { pizzas, chooseOption };
