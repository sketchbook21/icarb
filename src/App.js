import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";

const App = (props) => {
  return (
    <Provider store={props.store}>
      <Router>
        <Route component={Nav} path="/icarb" />
        <Switch>
          <Route component={Home} exact path="/icarb" />
          <Route component={Order} path="/icarb/pizza/new" />
          <Route component={Order} path="/icarb/pizza/:id/edit" />
          <Route component={Checkout} path="/icarb/checkout" />
          <Redirect to="/icarb" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
