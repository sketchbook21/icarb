import {
  pizzaSize,
  crustType,
  pizzaStyle,
  extraToppings,
  convertToDisplayValue,
} from "../data/pizzaConstants";

// Action type constants
const CHOOSE_OPTION = "CHOOSE_OPTION";
const RESET_ORDER = "RESET_ORDER";
const ADD_TO_CART = "ADD_TO_CART";

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

const addToCart = () => {
  return {
    type: ADD_TO_CART,
  };
};

// initialState

const initialState = {
  pizzaOptions: [...pizzaSize, ...crustType, ...pizzaStyle, ...extraToppings],
  mdSizeSelected: true,
  subtotalItems: [],
  cart: [],
  cartTotal: 0,
  displayCartTotal: "",
};
// const initialState = {
//   pizzaOptions: [...pizzaSize, ...crustType, ...pizzaStyle, ...extraToppings],
//   mdSizeSelected: true,
//   subtotalItems: [],
//   cart: [
//     {
//       cartId: 1,
//       mdSizeSelected: false,
//       pizzaOptions: [
//         {
//           id: 2,
//           category: "Size",
//           name: "Large (16-inch)",
//           img: null,
//           type: null,
//           value1: 100,
//           value2: 100,
//           displayValue1: "$100",
//           displayValue2: "$100",
//           active: false,
//         },
//         {
//           id: 3,
//           category: "Crust",
//           name: "Regular",
//           img: null,
//           type: null,
//           value1: 100,
//           value2: 100,
//           displayValue1: "$100",
//           displayValue2: "$100",
//           active: false,
//         },
//         {
//           id: 8,
//           category: "Style",
//           name: "Basil & Ricotta",
//           img: "ricotta-basil.jpeg",
//           type: "veg",
//           value1: 100,
//           value2: 100,
//           displayValue1: "$100",
//           displayValue2: "$100",
//           active: false,
//         },
//         {
//           id: 25,
//           category: "Extra Topping",
//           name: "Cranberry",
//           img: null,
//           type: null,
//           value1: 100,
//           value2: 100,
//           displayValue1: "$100",
//           displayValue2: "$100",
//           active: false,
//         },
//         {
//           id: 27,
//           category: "Extra Topping",
//           name: "Fresh Pineapple",
//           img: null,
//           type: null,
//           value1: 100,
//           value2: 100,
//           displayValue1: "$100",
//           displayValue2: "$100",
//           active: false,
//         },
//       ],
//     },
//   ],
//   cartTotal: 400,
//   displayCartTotal: "$400.00",
// };

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
    case ADD_TO_CART:
      const newCartId = state.cart.length + 1;
      const newCartItem = {
        cartId: newCartId,
        mdSizeSelected: state.mdSizeSelected,
        pizzaOptions: state.subtotalItems,
      };
      const newCart = state.cart.concat(newCartItem);
      let newCartTotal = 0;
      newCart.forEach((cartItem) => {
        cartItem.pizzaOptions.forEach((option) => {
          if (cartItem.mdSizeSelected) {
            newCartTotal += option.value1;
          } else {
            newCartTotal += option.value2;
          }
        });
      });
      return {
        ...state,
        cart: newCart,
        cartTotal: newCartTotal,
        displayCartTotal: convertToDisplayValue(newCartTotal),
      };
    default:
      return state;
  }
};

// Export statement

export { pizzas, chooseOption, resetOrder, addToCart };
