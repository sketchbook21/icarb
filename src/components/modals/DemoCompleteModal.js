import React from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";

const DemoCompleteModal = ({ show, onHide, handleResetDemo }) => {
  return (
    <Container className="mx-auto">
      <Modal
        show={show}
        onHide={() => onHide(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Container>
          <Row>
            <Col
              md={4}
              className="modal-complete-hero"
              style={{ height: "50vh" }}
            />
            <Col md={8} className="d-flex align-items-center">
              <Container>
                <Row>
                  <Col md={12} className="fs-2 fw-7">
                    iCarb{" "}
                    <span role="img" aria-label="pizza">
                      🍕
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={12}
                    className="mt-3 fw-5"
                    style={{ lineHeight: "1.5" }}
                  >
                    Thank you for trying out this food ordering experience built
                    in React with Redux!
                  </Col>
                  <Col md={12} className="mt-4" style={{ lineHeight: "1.5" }}>
                    We hope this didn't make you too hungry... But if it did,
                    you can find these
                    <span className="fw-5"> exact</span> pies at my favorite
                    pizza shop,{" "}
                    <a
                      href="https://www.ottoportland.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ottos
                    </a>
                    .
                  </Col>
                  <Col md={12} className="mt-3" style={{ lineHeight: "1.5" }}>
                    Tell them Gil sent you. It won't matter to them, but I'll
                    appreciate it.
                  </Col>
                  <Col md={12} className="mt-4" style={{ color: "" }}>
                    Built by Gilbert Hsu{" "}
                    <span role="img" aria-label="pizza">
                      🤓
                    </span>
                    <br />
                    <div className="mt-1">
                      <a
                        href="https://www.linkedin.com/in/gilberthsu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>{" "}
                      |{" "}
                      <a
                        href="https://github.com/sketchbook21"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </Col>
                </Row>
                <Col
                  md={12}
                  className="mt-3 text-right"
                  style={{ color: "gray" }}
                >
                  <Button
                    className="mr-2"
                    variant="primary"
                    onClick={handleResetDemo}
                  >
                    Restart Demo
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => onHide(false)}
                  >
                    Dismiss
                  </Button>
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal>
    </Container>
  );
};

export default DemoCompleteModal;
