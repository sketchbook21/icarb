import React from "react";
import { Button, Row, Container } from "react-bootstrap";

const OptionBlock = ({ title, options }) => {
  const displayOptions = options.map((option) => {
    // const toggleClass = selected
    //   ? "option-button-selected d-flex justify-content-between"
    //   : "option-button d-flex justify-content-between";
    return (
      <Row>
        <Button
          className="option-button d-flex justify-content-between"
          variant="outline-primary"
          disabled={option.disabled}
          active={option.active}
        >
          <span>{option.name}</span>
          <span>{option.value}</span>
        </Button>
      </Row>
    );
  });
  return (
    <div className="option-block">
      <div className="my-3 fw-5">{title}</div>
      <Container>{displayOptions}</Container>
    </div>
  );
};

export default OptionBlock;
