import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { setShowLoader } from "../../modules/pizzas";
import { delay } from "../../helpers/helperFunctions";

const CheckoutModal = ({
  id,
  reducerFunction,
  displayPizzaName,
  show,
  onHide,
  setShowLoader,
  header,
  note,
  emoji,
  confirmButtonType,
  confirmButtonText,
  editModal = false,
}) => {
  const history = useHistory();
  const handleReducer = async (cartId) => {
    setShowLoader(true);
    reducerFunction(cartId);
    onHide();
    if (!editModal) {
      await delay(250);
    } else {
      await delay(1000);
      history.push(`/icarb/pizza/${cartId}/edit`);
    }
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
          {header} <br />
        </div>
      </Modal.Header>
      <Modal.Body>
        <span className="fw-5">{displayPizzaName}</span>
        <br />
        <br />
        Note: {note}{" "}
        <span role="img" aria-label="emoji">
          {emoji}
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={confirmButtonType} onClick={() => handleReducer(id)}>
          {confirmButtonText}
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

export default connect(null, mapDispatchToProps)(CheckoutModal);
