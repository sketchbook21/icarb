import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";
import { removePizza, editPizza, duplicatePizza } from "../../modules/pizzas";
import { convertToDisplayValue } from "../../data/pizzaConstants";
import RemovePizzaModal from "../modals/RemovePizzaModal";
import EditPizzaModal from "../modals/EditPizzaModal";
import DuplicateModal from "../modals/DuplicateModal";

const CheckoutItem = ({
  id,
  mdSizeSelected,
  pizzaOptions,
  removePizza,
  editPizza,
  duplicatePizza,
}) => {
  const [modalShowRemove, setModalShowRemove] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);
  const [modalShowDuplicate, setModalShowDuplicate] = useState(false);

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
            <div>{displayPizzaName}</div>
            <Button
              variant="link"
              className="button-text-only"
              onClick={() => setModalShowDuplicate(true)}
            >
              Duplicate Pizza
            </Button>
          </Col>
          <Col md={2} className="fs-3 fw-7 text-right px-0">
            <div>{convertToDisplayValue(itemTotal)}</div>

            <Button
              variant="link"
              className="button-text-only"
              onClick={() => setModalShowRemove(true)}
            >
              Remove
            </Button>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="fw-5 px-0">Details</Col>
          <Col className="px-0 text-right">
            <Button
              variant="link"
              className="button-text-only text-right"
              onClick={() => setModalShowEdit(true)}
            >
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
        show={modalShowRemove}
        onHide={() => setModalShowRemove(false)}
      />
      <EditPizzaModal
        id={id}
        editPizza={editPizza}
        displayPizzaName={displayPizzaName}
        show={modalShowEdit}
        onHide={() => setModalShowEdit(false)}
      />
      <DuplicateModal
        id={id}
        duplicatePizza={duplicatePizza}
        displayPizzaName={displayPizzaName}
        show={modalShowDuplicate}
        onHide={() => setModalShowDuplicate(false)}
      />
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePizza: (id) => dispatch(removePizza(id)),
    editPizza: (id) => dispatch(editPizza(id)),
    duplicatePizza: (id) => dispatch(duplicatePizza(id)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
