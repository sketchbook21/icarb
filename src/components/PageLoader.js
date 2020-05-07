import React from "react";
import { Container, Spinner } from "react-bootstrap";

const PageLoader = () => (
  <Container
    className="d-flex justify-content-center align-items-center"
    style={{ height: "80vh" }}
  >
    <Spinner animation="grow" variant="primary" />
  </Container>
);

export default PageLoader;
