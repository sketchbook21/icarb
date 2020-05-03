import {
  pizzaSize,
  crustType,
  pizzaStyle,
  extraToppings,
} from "../data/pizzaConstants";

// Action type constants
const CHOOSE_OPTION = "CHOOSE_OPTION";
const RESET_ORDER = "RESET_ORDER";

// Action creators

const chooseOption = (category, id) => {
  return {
    type: CHOOSE_OPTION,
    category: category,
    id,
  };
};

const resetOrder = () => {
  return {
    type: RESET_ORDER,
  };
};

// initialState

const initialState = {
  pizzaOptions: [...pizzaSize, ...crustType, ...pizzaStyle, ...extraToppings],
  mdSizeSelected: true,
  subtotalItems: [],
};

// misc functions

const setSelection = (pizzaOptions, category, id) => {
  const newArray = pizzaOptions.concat();
  if (category === "Extra Topping") {
    newArray.forEach((item) => {
      if (item.id === id) {
        item.active = !item.active;
      }
    });
  } else {
    newArray.forEach((item) => {
      if (item.category === category) {
        if (item.id === id) {
          item["active"] = true;
        } else {
          item["active"] = false;
        }
      }
    });
  }
  return newArray;
};

const addToSubtotal = (newPizzaOptionsState) => {
  const newSubtotalItems = newPizzaOptionsState.filter((item) => {
    return item.active === true;
  });

  return newSubtotalItems;
};

const changeSizeSelection = (id) => {
  let mdSizeSelected = true;
  if (id === 2) {
    mdSizeSelected = false;
  }
  return mdSizeSelected;
};

// reducer

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_OPTION:
      const newPizzaOptionsState = setSelection(
        state.pizzaOptions,
        action.category,
        action.id
      );
      const newSubtotalItems = addToSubtotal(newPizzaOptionsState);

      if (action.category === "Size") {
        const newMdSizeSelected = changeSizeSelection(action.id);
        return {
          ...state,
          pizzaOptions: newPizzaOptionsState,
          subtotalItems: newSubtotalItems,
          mdSizeSelected: newMdSizeSelected,
        };
      }

      return {
        ...state,
        pizzaOptions: newPizzaOptionsState,
        subtotalItems: newSubtotalItems,
      };
    case RESET_ORDER:
      const resetPizzaOptions = state.pizzaOptions.concat();
      resetPizzaOptions.forEach((option) => {
        option.active = false;
      });
      const resetSubtotalItems = [];
      return {
        ...state,
        pizzaOptions: resetPizzaOptions,
        subtotalItems: resetSubtotalItems,
      };
    default:
      return state;
  }
};

// Export statement

export { pizzas, chooseOption, resetOrder };
