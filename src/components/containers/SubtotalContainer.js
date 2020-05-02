import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SubtotalContainer = ({ items }) => {
  let totalValue = 0;
  let displayTotalValue = "";
  const displayItems = items.map((item) => {
    totalValue += item.value1;
    displayTotalValue = `$${(totalValue / 100).toFixed(2)}`;
    return (
      <Row
        key={item.id}
        md={12}
        className="d-flex justify-content-between my-2"
      >
        <div>
          {item.category}: {item.name}
        </div>
        <div>{item.displayValue1}</div>
      </Row>
    );
  });
  return (
    <Container className="subtotal-container mb-3">
      <Row className="subtotal-title py-2 fw-5 d-flex justify-content-between">
        <div>Subtotal</div>
        <div>{displayTotalValue}</div>
      </Row>
      <Row>
        <Col className="display-items-container">{displayItems}</Col>
      </Row>
    </Container>
  );
};

export default SubtotalContainer;
