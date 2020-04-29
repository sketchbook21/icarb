import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const OptionCheckBlock = ({ title, options }) => {
  const displayOptions = options.map((option) => {
    return (
      <Col md={6} className="mb-2">
        <Form.Check
          type="checkbox"
          id={option.name}
          label={option.name}
          onClick={() => alert(`You selected ${option.name}!`)}
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
