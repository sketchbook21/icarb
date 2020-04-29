import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import SubtotalContainer from "./containers/SubtotalContainer";
import OptionBlock from "./tiles/OptionBlock";

const Order = (props) => {
  const history = useHistory();
  const handleContinue = () => {
    history.push("/icarb/checkout");
  };
  return (
    <Container className="mt-5 mx-auto">
      <Row>
        <Col md={6} className="pr-3">
          <div className="fs-2 fw-5">Start Order</div>
          <div className="mb-5">
            Select from our list of gourmet pies or build your own.
          </div>
          <OptionBlock
            title="Pickup or Delivery?"
            options={[
              { name: "Pickup", value: "$0.00", disabled: false },
              { name: "Delivery", value: "$5.00", disabled: false },
            ]}
          />
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
