import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const OptionCheckBlock = ({
  title,
  options,
  selectFunction,
  prevBlockSelected,
}) => {
  const displayTitleClass = prevBlockSelected
    ? "my-3 fw-5"
    : "my-3 fw-5 disabled-block";
  const displayOptions = options.map((option) => {
    return (
      <Col key={option.id} md={6} className="mb-2">
        <Form.Check
          type="checkbox"
          id={option.name}
          label={option.name}
          disabled={!prevBlockSelected}
          onClick={() => selectFunction(option.category, option.id)}
        />
      </Col>
    );
  });
  return (
    <div className="option-block">
      <div className={displayTitleClass}>{title}</div>
      <Row>{displayOptions}</Row>
    </div>
  );
};

export default OptionCheckBlock;
