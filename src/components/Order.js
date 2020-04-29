import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import SubtotalContainer from "./containers/SubtotalContainer";

const Order = (props) => {
  const history = useHistory();
  const handleContinue = () => {
    history.push("/icarb/checkout");
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="pr-3">
          Hello from left column
        </Col>
        <Col md={6}>
          Hello from right column
          <SubtotalContainer />
          <Button onClick={handleContinue}>Continue</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
