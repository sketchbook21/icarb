import React from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";

const DemoStartModal = ({ show, onHide }) => {
  return (
    <Container className="mx-auto">
      <Modal
        show={show}
        onHide={() => onHide(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="icarb-modal"
        centered
      >
        <Container>
          <Row>
            <Col md={4} className="modal-start-hero" />
            <Col md={8} className="d-flex align-items-center my-5">
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
                  <Col md={12} className="mt-3 fw-5">
                    Online food ordering experience built in React with Redux.
                  </Col>
                  <Col md={12} className="mt-3" style={{ lineHeight: "1.5" }}>
                    Redux is a state container for Javascript applications that
                    allows platforms to persist and share data across components
                    in a consistant and predictable way. While there are
                    infinite ways to demonstrate the power of centrally held
                    state, none seems more practical, and tasty, than a pizza
                    ordering experience.
                  </Col>
                  <Col md={12} className="mt-3" style={{ lineHeight: "1.5" }}>
                    <i>
                      This is a front-end only (aka serverless) application,
                      therefore changes made during the experience will be lost
                      if the website is refreshed.
                    </i>
                  </Col>
                  <Col md={12} className="mt-3" style={{ color: "" }}>
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
                  <Button onClick={() => onHide()}>Explore</Button>
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal>
    </Container>
  );
};

export default DemoStartModal;
