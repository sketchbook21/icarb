import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const EditPizzaModal = ({ id, editPizza, displayPizzaName, show, onHide }) => {
  const history = useHistory();
  const handleEdit = (cartId) => {
    editPizza(cartId);
    history.push(`/icarb/pizza/${cartId}/edit`);
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
          Are you sure you want to edit this pizza? <br />
        </div>
      </Modal.Header>
      <Modal.Body>
        <span className="fw-5">{displayPizzaName}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => handleEdit(id)}>
          Edit
        </Button>
        <Button variant="outline-secondary" onClick={onHide}>
          Dismiss
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPizzaModal;
