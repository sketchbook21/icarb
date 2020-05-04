import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import CheckoutItem from "./tiles/CheckoutItem";

const Checkout = ({ cart, cartTotal, displayCartTotal }) => {
  const displayCart = cart.map((pizza) => {
    return (
      <CheckoutItem key={pizza.cartId} pizzaOptions={pizza.pizzaOptions} />
    );
  });
  return (
    <Container className="">
      <Row className="my-5">
        <Col className="fs-2 mb-3 fw-7 d-flex justify-content-center" md={12}>
          Your order total is {displayCartTotal}
        </Col>
        <Col className="d-flex justify-content-center" md={12}>
          Someone is hungry.
        </Col>
      </Row>

      {displayCart}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.pizzas.cart,
    cartTotal: state.pizzas.cartTotal,
    displayCartTotal: state.pizzas.displayCartTotal,
  };
};

export default connect(mapStateToProps, null)(Checkout);
