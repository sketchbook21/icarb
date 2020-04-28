import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Route component={Nav} path="/icarb" />
      <Switch>
        <Route component={Home} exact path="/icarb" />
        <Route component={Order} exact path="/icarb/order/:id/item/:id" />
        <Route component={Checkout} exact path="/icarb/checkout/:id" />
        <Route component={NotFound} path="/icarb/" />
      </Switch>
    </Router>
  );
}

export default App;
