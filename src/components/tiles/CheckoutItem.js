import React from "react";
import {
  Row,
  Col,
  Image,
  Badge,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import { convertToDisplayValue } from "../../data/pizzaConstants";

const CheckoutItem = ({ pizzaOptions }) => {
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
    itemTotal += option.value1;
    return (
      <div
        className="mb-1 w-100 d-flex justify-content-between"
        key={option.id}
      >
        <div>
          {option.category}: <span className="fw-5">{option.name}</span>
        </div>
        <div>{option.displayValue1}</div>
      </div>
    );
  });

  return (
    <Row className="checkout-item">
      <Col md={3}>
        <div className="d-flex justify-content-center">
          <Image className="checkout-item-image" src={pizzaImageURL} />
        </div>
      </Col>
      <Col md={9} className="pl-5">
        <Row className="pb-3 line-below">
          <Col className="fs-3 fw-7 px-0">
            {size} {style}
          </Col>
          <Col className="fs-3 fw-7 text-right px-0">
            <div className="">{convertToDisplayValue(itemTotal)}</div>
            <div className="">
              <Button variant="link" className="button-text-only">
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
    </Row>
  );
};

export default CheckoutItem;
