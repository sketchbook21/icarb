import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const handleToOrder = () => {
    history.push("/icarb/pizza/new");
  };

  return (
    <div className="hero">
      <Container>
        <div className="fs-1 fw-5 mt-5 mb-3 ">iCarb Pizza</div>
        <div className="fs-3 fw-4 mt-2">Because everyday can be cheat day.</div>
        <div className="fs-3 fw-4 mt-2">Starting at $11.50</div>
        <Button className="mt-4" onClick={handleToOrder}>
          Order Now
        </Button>
      </Container>
    </div>
  );
};

export default Home;
