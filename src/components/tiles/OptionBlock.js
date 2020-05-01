import React from "react";
import { Button, Row, Container } from "react-bootstrap";

const OptionBlock = ({
  title,
  options,
  subOptionBlock = null,
  sizeBlock = null,
  selectFunction,
}) => {
  let displayTitleClass = "my-3 fw-5";
  let displayOptionBlockClass = "option-block";
  if (subOptionBlock) {
    displayTitleClass = "my-3 fs-4";
    displayOptionBlockClass = "suboption-block";
  }

  const displayOptions = options.map((option) => {
    let displayPrice = sizeBlock ? option.displayValue : option.mdDisplayValue;
    return (
      <Row key={option.id}>
        <Button
          className="option-button d-flex justify-content-between"
          variant="outline-primary"
          disabled={option.disabled}
          active={option.active}
          onClick={() => selectFunction(option.id)}
        >
          <span>{option.name}</span>
          <span>{displayPrice}</span>
        </Button>
      </Row>
    );
  });
  return (
    <div className={displayOptionBlockClass}>
      <div className={displayTitleClass}>{title}</div>
      <Container>{displayOptions}</Container>
    </div>
  );
};

export default OptionBlock;
