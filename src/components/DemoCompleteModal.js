import React from "react";
import { Modal } from "react-bootstrap";

const DemoCompleteModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="fw-5" id="contained-modal-title-vcenter">
          Demo complete!
        </div>
      </Modal.Header>
    </Modal>
  );
};

export default DemoCompleteModal;
