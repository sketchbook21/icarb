import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { setShowLoader } from "../../modules/pizzas";
import { delay } from "../../helpers/helperFunctions";

const DuplicateModal = ({
  id,
  duplicatePizza,
  displayPizzaName,
  show,
  onHide,
  setShowLoader,
}) => {
  const handleDuplicate = async () => {
    setShowLoader(true);
    duplicatePizza(id);
    onHide();
    await delay(250);
    setShowLoader(false);
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
          Are you sure you want to duplicate this pizza? <br />
        </div>
      </Modal.Header>
      <Modal.Body>
        <span className="fw-5">{displayPizzaName}</span>
        <br />
        <br />
        Note: They say, the more <i className="fw-5">pizzas</i> the merrier{" "}
        <span role="img" aria-label="wink-face">
          😉
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={(id) => handleDuplicate(id)}>
          Confirm
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

export default connect(null, mapDispatchToProps)(DuplicateModal);
