import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { delay } from "../helpers/helperFunctions";
import { setShowLoader, hideHomeModal } from "../modules/pizzas";
import PageLoader from "./PageLoader";
import DemoStartModal from "./modals/DemoStartModal";
import PreventMobileModal from "./modals/PreventMobileModal";

const Home = ({ showLoader, setShowLoader, showHomeModal, hideHomeModal }) => {
  const history = useHistory();
  const [showPreventMobile, setShowPreventMobile] = useState(false);
  const handleToOrder = async () => {
    setShowLoader(true);
    await delay(500);
    history.push("/icarb/pizza/new");
    setShowLoader(false);
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      hideHomeModal();
      setShowPreventMobile(true);
    }
  }, [showPreventMobile, hideHomeModal]);

  if (showLoader) {
    return <PageLoader />;
  }

  return (
    <div className="hero">
      <Container>
        <div className="fs-1 fw-7 mt-5 mb-3 ">
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
      <DemoStartModal show={showHomeModal} onHide={hideHomeModal} />
      <PreventMobileModal show={showPreventMobile} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoader: state.pizzas.showLoader,
    showHomeModal: state.pizzas.showHomeModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowLoader: (boolean) => dispatch(setShowLoader(boolean)),
    hideHomeModal: () => dispatch(hideHomeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
