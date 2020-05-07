import React from "react";
import { connect } from "react-redux";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { delay } from "../helpers/helperFunctions";
import { setShowLoader } from "../modules/pizzas";
import PageLoader from "./PageLoader";

const Home = ({ showLoader, setShowLoader }) => {
  const history = useHistory();
  const handleToOrder = async () => {
    setShowLoader(true);
    await delay(500);
    history.push("/icarb/pizza/new");
    setShowLoader(false);
  };

  if (showLoader) {
    return <PageLoader />;
  }

  return (
    <div className="hero">
      <Container>
        <div className="fs-1 fw-5 mt-5 mb-3 ">
          iCarb{" "}
          <span role="img" aria-label="pizza">
            🍕
          </span>
        </div>
        <div className="fs-3 fw-4 mt-2">Because everyday can be cheat day.</div>
        <div className="fs-3 fw-4 mt-2">Starting at $11.50</div>
        <Button className="mt-4" onClick={handleToOrder}>
          Order Now
        </Button>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoader: state.pizzas.showLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowLoader: (boolean) => dispatch(setShowLoader(boolean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
