import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { setShowLoader } from "../../modules/pizzas";
import { delay } from "../../helpers/helperFunctions";

const EditPizzaModal = ({
  id,
  editPizza,
  displayPizzaName,
  show,
  onHide,
  setShowLoader,
}) => {
  const history = useHistory();
  const handleEdit = async (cartId) => {
    setShowLoader(true);
    editPizza(cartId);
    onHide();
    await delay(1000);
    setShowLoader(false);
    history.push(`/icarb/pizza/${cartId}/edit`);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setShowLoader: (boolean) => dispatch(setShowLoader(boolean)),
  };
};

export default connect(null, mapDispatchToProps)(EditPizzaModal);
