import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Modal, Button } from "react-bootstrap";
import { delay } from "../../helpers/helperFunctions";

const LeaveBuilderModal = ({
  show,
  onHide,
  afterLeaveBuilderPath,
  setShowLoader,
  resetBuilder,
}) => {
  const history = useHistory();
  const handleLeave = async () => {
    setShowLoader(true);
    onHide();
    resetBuilder();
    await delay(250);
    setShowLoader(false);
    history.push(afterLeaveBuilderPath);
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
          Are you sure you want to leave the builder?
        </div>
      </Modal.Header>
      <Modal.Body>
        Your current selections will be lost.
        <br />
        <br />
        Note: To save your pizza, click <span className="fw-5">
          Continue
        </span>{" "}
        or <span className="fw-5">Add To Cart</span>.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleLeave}>
          Leave
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Continue Building
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    afterLeaveBuilderPath: state.pizzas.afterLeaveBuilderPath,
  };
};

export default connect(mapStateToProps, null)(LeaveBuilderModal);
