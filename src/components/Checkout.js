import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

const Checkout = (props) => {
  const displayPizzas = props.pizzaList.map((pizza) => {
    return (
      <div key={pizza.id}>
        {pizza.id} {pizza.name}
      </div>
    );
  });
  return <Container>Hello from checkout!{displayPizzas}</Container>;
};

const mapStateToProps = (state) => {
  return {
    pizzaList: state.pizzas.pizzaList,
  };
};

export default connect(mapStateToProps, null)(Checkout);
