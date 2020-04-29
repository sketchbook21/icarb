import React from "react";
import { Button, Row, Container } from "react-bootstrap";

const OptionBlock = ({ title, options }) => {
  const displayOptions = options.map((option) => {
    return (
      <Row>
        <Button variant="outline-secondary" disabled={option.disabled}>
          {option.name} {option.value}
        </Button>
      </Row>
    );
  });
  return (
    <>
      <div className="my-3 fw-5">{title}</div>
      <Container>{displayOptions}</Container>
    </>
  );
};

export default OptionBlock;
