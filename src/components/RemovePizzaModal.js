import React from "react";
import { Modal, Button } from "react-bootstrap";

const RemovePizzaModal = ({
  id,
  removePizza,
  displayPizzaName,
  show,
  onHide,
}) => {
  const handleRemove = () => {
    removePizza(id);
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="fw-5" id="contained-modal-title-vcenter">
          Are you sure you want to remove this pizza? <br />
        </div>
      </Modal.Header>
      <Modal.Body>
        <span className="fw-5">{displayPizzaName}</span>
        <br />
        <br />
        Note: This change cannot be undone.{" "}
        <span role="img" aria-label="sad-face">
          😢
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleRemove}>
          Remove
        </Button>
        <Button variant="outline-secondary" onClick={onHide}>
          Dismiss
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemovePizzaModal;
