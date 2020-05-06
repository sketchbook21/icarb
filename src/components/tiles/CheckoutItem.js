import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";
import RemovePizzaModal from "../RemovePizzaModal";
import { removePizza } from "../../modules/pizzas";
import { convertToDisplayValue } from "../../data/pizzaConstants";

const CheckoutItem = ({ id, mdSizeSelected, pizzaOptions, removePizza }) => {
  const [modalShow, setModalShow] = useState(false);

  let pizzaImageURL = "/icarb/images/";
  let size = "";
  let style = "";
  let itemTotal = 0;
  const optionItems = pizzaOptions.map((option) => {
    if (option.category === "Style") {
      style = option.name;
      pizzaImageURL += option.img;
    }
    if (option.category === "Size") {
      size = option.name;
    }
    if (mdSizeSelected) {
      itemTotal += option.value1;
    } else {
      itemTotal += option.value2;
    }

    const displayValue = mdSizeSelected
      ? option.displayValue1
      : option.displayValue2;
    return (
      <div
        className="mb-1 w-100 d-flex justify-content-between"
        key={option.id}
      >
        <div>
          {option.category}: <span className="fw-5">{option.name}</span>
        </div>
        <div>{displayValue}</div>
      </div>
    );
  });

  const displayPizzaName = `${size} ${style}`;

  return (
    <Row className="checkout-item">
      <Col md={4} className="px-0">
        <Image className="checkout-item-image" src={pizzaImageURL} />
      </Col>
      <Col md={8}>
        <Row className="pb-3 line-below">
          <Col md={10} className="fs-3 fw-7 px-0">
            {displayPizzaName}
          </Col>
          <Col md={2} className="fs-3 fw-7 text-right px-0">
            <div className="">{convertToDisplayValue(itemTotal)}</div>
            <div className="">
              <Button
                variant="link"
                className="button-text-only"
                onClick={() => setModalShow(true)}
              >
                Remove
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="fw-5 px-0">Details</Col>
          <Col className="px-0 text-right">
            <Button variant="link" className="button-text-only text-right">
              Edit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="fs-5 ml-2 px-0">{optionItems}</Col>
        </Row>
      </Col>
      <RemovePizzaModal
        id={id}
        removePizza={removePizza}
        displayPizzaName={displayPizzaName}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePizza: (id) => dispatch(removePizza(id)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
