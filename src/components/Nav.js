import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Navbar, Container, Image, Badge } from "react-bootstrap";
import { setShowLeaveBuilderModal } from "../modules/pizzas";
import ShoppingBag from "./icons/ShoppingBag";

const Nav = ({
  cart,
  subtotalItems,
  history,
  location,
  setShowLeaveBuilderModal,
}) => {
  const handleHomeUrl = () => {
    if (
      location.pathname.includes("/icarb/pizza") &&
      subtotalItems.length > 0
    ) {
      setShowLeaveBuilderModal(true, "/icarb");
    } else {
      history.push("/icarb");
    }
  };

  const handleCheckoutUrl = () => {
    if (
      location.pathname.includes("/icarb/pizza") &&
      subtotalItems.length > 0
    ) {
      setShowLeaveBuilderModal(true, "/icarb/checkout");
    } else {
      history.push("/icarb/checkout");
    }
  };

  const cartLength = cart.length > 0 ? cart.length : null;

  return (
    <Navbar
      expand="sm"
      bg="dark"
      variant="dark"
      className="d-flex align-items-center"
    >
      <Container>
        <Navbar.Brand className="w-100 d-flex justify-content-between mx-0">
          <span onClick={handleHomeUrl}>
            <Image
              className="pr-2 pb-1"
              src="/icarb/pizza.svg"
              style={{ height: "1.5em" }}
            />{" "}
            iCarb
          </span>
          <span onClick={handleCheckoutUrl}>
            <Badge pill variant="primary" className="mr-2 fs-5">
              {cartLength}
            </Badge>
            <ShoppingBag />
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.pizzas.cart,
    subtotalItems: state.pizzas.subtotalItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowLeaveBuilderModal: (boolean, path) =>
      dispatch(setShowLeaveBuilderModal(boolean, path)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
