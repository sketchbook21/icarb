import React from "react";
import { Container, Modal, Row, Col } from "react-bootstrap";

const PreventMobileModal = ({ show }) => {
  return (
    <Container className="mx-auto">
      <Modal
        show={show}
        onHide={() => {}}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        className="icarb-modal"
        centered
      >
        <Container>
          <Row>
            <Col
              sm={12}
              className="modal-mobile-hero"
              style={{ height: "25vh" }}
            />
            <Col sm={12} className="d-flex align-items-center">
              <Container>
                <Row>
                  <Col sm={12} className="fs-2 fw-7 mt-4">
                    iCarb{" "}
                    <span role="img" aria-label="pizza">
                      🍕
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mt-4 fw-5">
                    Online food ordering experience built in React with Redux.
                  </Col>
                  <Col md={12} className="mt-4">
                    Sorry, this experience is only available on desktop.
                  </Col>
                  <Col md={12} className="mt-4 mb-5" style={{ color: "" }}>
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
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal>
    </Container>
  );
};

export default PreventMobileModal;
