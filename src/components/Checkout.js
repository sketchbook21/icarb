import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import CheckoutItem from "./tiles/CheckoutItem";
import { resetOrder } from "../modules/pizzas";
import DemoCompleteModal from "./DemoCompleteModal";

const Checkout = ({ cart, displayCartTotal, resetOrder }) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const handleAddAnother = () => {
    resetOrder();
    history.push("/icarb/pizza/new");
  };

  const displayCart = cart.map((pizza) => {
    return (
      <CheckoutItem
        key={pizza.cartId}
        id={pizza.cartId}
        mdSizeSelected={pizza.mdSizeSelected}
        pizzaOptions={pizza.pizzaOptions}
      />
    );
  });
  return (
    <Container className="">
      <Row className="my-5">
        <Col className="fs-2 mb-3 fw-7 d-flex justify-content-center" md={12}>
          Your order total is {displayCartTotal}
        </Col>
        <Col className="d-flex justify-content-center" md={12}>
          Your friends are gonna be so jelly.
        </Col>
      </Row>
      {displayCart}
      <Row className="d-flex justify-content-between fs-3 fw-7 cart-total">
        <div>Total</div>
        <div>{displayCartTotal}</div>
      </Row>
      <Row className="d-flex justify-content-between">
        <Button
          variant="outline-secondary"
          className=" mt-3 mb-5"
          style={{ width: "20vw" }}
          onClick={handleAddAnother}
        >
          Add Another Pizza
        </Button>
        <Button
          variant="primary"
          className=" mt-3 mb-5"
          style={{ width: "20vw" }}
          onClick={() => setModalShow(true)}
        >
          Order Now
        </Button>
      </Row>
      <DemoCompleteModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.pizzas.cart,
    displayCartTotal: state.pizzas.displayCartTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetOrder: () => dispatch(resetOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
