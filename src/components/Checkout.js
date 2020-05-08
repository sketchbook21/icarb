import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import CheckoutItem from "./tiles/CheckoutItem";
import { resetBuilder, setShowLoader } from "../modules/pizzas";
import DemoCompleteModal from "./modals/DemoCompleteModal";
import PageLoader from "./PageLoader";
import { delay } from "../helpers/helperFunctions";

const Checkout = ({
  cart,
  displayCartTotal,
  resetBuilder,
  showLoader,
  setShowLoader,
}) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const handleToOrder = async () => {
    setShowLoader(true);
    resetBuilder();
    await delay(500);
    history.push("/icarb/pizza/new");
    setShowLoader(false);
  };

  const displayCart = cart.map((pizza) => {
    return (
      <CheckoutItem
        key={pizza.cartId}
        id={pizza.cartId}
        mdSizeSelected={pizza.mdSizeSelected}
        pizzaOptions={pizza.pizzaOptions}
        setShowLoader={setShowLoader}
      />
    );
  });

  if (showLoader) {
    return <PageLoader />;
  }

  if (cart.length === 0) {
    return (
      <Container>
        <Row style={{ marginTop: "200px" }}>
          <Col md={12} className="text-center">
            <div className="fs-2 fw-7 mb-5 pt-5">
              Sorry, there are no pizzas in checkout{" "}
              <span role="img" aria-label="sad-face">
                😭
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <Button variant="primary" onClick={handleToOrder}>
              Start A New Order
            </Button>
          </Col>
        </Row>
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
          onClick={handleToOrder}
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
  console.log(state.pizzas.cart);
  return {
    cart: state.pizzas.cart,
    displayCartTotal: state.pizzas.displayCartTotal,
    showLoader: state.pizzas.showLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetBuilder: () => dispatch(resetBuilder()),
    setShowLoader: (boolean) => dispatch(setShowLoader(boolean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
