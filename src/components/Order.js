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
        <Col md={6} className="pr-3 order-options-column">
          <div className="fs-2 fw-5">Start Order</div>
          <div className="mb-5">
            Select from our list of gourmet pies or build your own.
          </div>
          <OptionBlock
            title="Choose your size."
            options={[
              {
                name: "Medium (12-inch)",
                value: "+$11.50",
                active: true,
                disabled: false,
              },
              {
                name: "Large (16-inch)",
                value: "+$16.25",
                selected: false,
                disabled: false,
              },
            ]}
          />
          <OptionBlock
            title="Choose your crust."
            options={[
              {
                name: "Regular",
                value: "+$0.00",
                active: false,
                disabled: false,
              },
              {
                name: "Gluten-free",
                value: "+$2.00",
                selected: false,
                disabled: false,
              },
            ]}
          />
          <OptionBlock
            title="Choose from our House Specials."
            options={[
              {
                name: "Cheese",
                value: "+$0.00",
                active: false,
                disabled: false,
              },
              {
                name: "3 Cheese Tortelinni",
                value: "+$3.50",
                selected: false,
                disabled: false,
              },
              {
                name: "Four Cheese",
                value: "+$3.50",
                selected: false,
                disabled: false,
              },
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
