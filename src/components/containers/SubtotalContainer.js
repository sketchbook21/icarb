import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SubtotalContainer = ({ items }) => {
  const displayItems = items.map((item) => {
    return (
      <Row
        key={item.id}
        md={12}
        className="d-flex justify-content-between my-2"
      >
        <div>{item.name}</div>
        <div>{item.value}</div>
      </Row>
    );
  });
  return (
    <Container className="subtotal-container mb-3">
      <Row className="subtotal-title py-2 fw-5 d-flex justify-content-between">
        <div>Pizza Subtotal</div>
        <div>$100.00</div>
      </Row>
      <Row>
        <Col className="display-items-container">{displayItems}</Col>
      </Row>
    </Container>
  );
};

export default SubtotalContainer;
