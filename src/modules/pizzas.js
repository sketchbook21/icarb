// Action type constants

// Action creators

// Reducer and its initialState

const initialState = {
  pizzaList: [
    { id: 1, name: "Delicious Pizza!" },
    { id: 2, name: "Pepperoni Awesome" },
  ],
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Export statement

export { pizzas };
