import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const OptionCheckBlock = ({ title, options, selectFunction }) => {
  const displayOptions = options.map((option) => {
    return (
      <Col key={option.id} md={6} className="mb-2">
        <Form.Check
          type="checkbox"
          id={option.name}
          label={option.name}
          onClick={() => selectFunction(option.category, option.id)}
        />
      </Col>
    );
  });
  return (
    <div className="option-block">
      <div className="my-3 fw-5">{title}</div>
      <Row>{displayOptions}</Row>
    </div>
  );
};

export default OptionCheckBlock;
