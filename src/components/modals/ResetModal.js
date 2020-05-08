import React from "react";
import { Modal, Button } from "react-bootstrap";

const ResetModal = (props) => {
  const handleReset = () => {
    props.handleReset();
    props.onHide();
  };
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="fw-5" id="contained-modal-title-vcenter">
          Are you sure you want to reset this pizza?
        </div>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="danger" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outline-secondary" onClick={props.onHide}>
          Dismiss
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResetModal;
