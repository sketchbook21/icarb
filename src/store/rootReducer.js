import { combineReducers } from "redux";

import { pizzas } from "../modules/pizzas";

const rootReducer = combineReducers({
  pizzas,
});

export default rootReducer;
