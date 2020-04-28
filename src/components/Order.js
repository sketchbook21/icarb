import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubtotalContainer from "./containers/SubtotalContainer";

const Order = (props) => {
  return (
    <Container>
      <Row>
        <Col md={6} className="pr-3">
          Hello from left column
        </Col>
        <Col md={6}>
          Hello from right column
          <SubtotalContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
