import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import CheckoutItem from "./tiles/CheckoutItem";
import { resetBuilder } from "../modules/pizzas";
import DemoCompleteModal from "./DemoCompleteModal";

const Checkout = ({ cart, displayCartTotal, resetBuilder }) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const handleAddAnother = () => {
    resetBuilder();
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

  if (cart.length === 0) {
    return (
      <Container
        className="my-5 fs-2 mb-3 fw-7 d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <div className="mb-5 pt-5">
          Sorry, there are no pizzas in checkout{" "}
          <span role="img" aria-label="sad-face">
            😭
          </span>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <Row className="my-5 text-center">
        <Col className="fs-2 mb-3 fw-7 " md={12}>
          Your order total is {displayCartTotal}
        </Col>
        <Col md={12}>
          Your friends are gonna be so jelly{"  "}
          <span role="img" aria-label="heart-face">
            😍
          </span>
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
    resetBuilder: () => dispatch(resetBuilder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
