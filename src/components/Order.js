import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { chooseOption, resetOrder, addToCart } from "../modules/pizzas";
import SubtotalContainer from "./containers/SubtotalContainer";
import OptionBlock from "./tiles/OptionBlock";
import OptionCheckBlock from "./tiles/OptionCheckBlock";
import ResetModal from "./ResetModal";

const Order = ({
  pizzaSizes,
  crustTypes,
  pizzaStyles,
  extraToppings,
  chooseOption,
  subtotalItems,
  mdSizeSelected,
  resetOrder,
  addToCart,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();
  const cheesePizzas = pizzaStyles.filter((pizza) => pizza.type === "cheese");
  const vegPizzas = pizzaStyles.filter((pizza) => pizza.type === "veg");
  const meatPizzas = pizzaStyles.filter((pizza) => pizza.type === "meat");

  const handleContinue = () => {
    addToCart();
    history.push("/icarb/checkout");
  };

  let pizzaImageURL = "/icarb/images/cheese.jpeg";
  subtotalItems.forEach((item) => {
    if (item.category === "Style") {
      pizzaImageURL = `/icarb/images/${item.img}`;
    }
  });

  const blockSelected = (array, category) => {
    const items = array.filter((item) => item.category === category);
    if (items.length > 0) {
      return true;
    }
    return false;
  };

  const sizeSelected = blockSelected(subtotalItems, "Size");
  const crustSelected = blockSelected(subtotalItems, "Crust");
  const styleSelected = blockSelected(subtotalItems, "Style");

  const extraToppingTitle = mdSizeSelected
    ? "Choose extra toppings. +$1.50 each"
    : "Choose extra toppings. +$2.50 each";

  const pizzaStyleClassName = crustSelected
    ? "my-3 fw-5"
    : "my-3 fw-5 disabled-block";

  const checkoutDisabled = subtotalItems.length > 2 ? false : true;

  console.log(pizzaImageURL);
  return (
    <Container className="mt-5 mx-auto">
      <Row>
        <Col md={6}>
          <Image className="preview-img mb-3" src={pizzaImageURL} />
          <SubtotalContainer
            items={subtotalItems}
            mdSizeSelected={mdSizeSelected}
          />
          <div className="line-below">
            <Button
              className="mb-3"
              block={true}
              disabled={checkoutDisabled}
              onClick={handleContinue}
            >
              Continue
            </Button>
            <Button
              className="mb-3"
              variant="outline-info"
              block={true}
              disabled={checkoutDisabled}
              onClick={() => alert("add to cart")}
            >
              Add To Cart & Build Another
            </Button>
          </div>
          <Button
            variant="outline-danger"
            block={true}
            onClick={() => setModalShow(true)}
          >
            Reset
          </Button>
        </Col>
        <Col md={6} className="order-options-column">
          <div className="fs-2 fw-5">Start Order</div>
          <div className="mb-5">
            Select from our list of gourmet pies or build your own.
          </div>
          <OptionBlock
            title="Choose your size."
            options={pizzaSizes}
            sizeBlock={true}
            selectFunction={chooseOption}
            prevBlockSelected={true}
          />
          <OptionBlock
            title="Choose your crust."
            options={crustTypes}
            selectFunction={chooseOption}
            mdSizeSelected={mdSizeSelected}
            prevBlockSelected={sizeSelected}
          />
          <div className="option-block">
            <div className={pizzaStyleClassName}>
              Choose from our House Specials.
            </div>
            <OptionBlock
              title="Cheese"
              subOptionBlock={true}
              options={cheesePizzas}
              selectFunction={chooseOption}
              mdSizeSelected={mdSizeSelected}
              prevBlockSelected={crustSelected}
            />
            <OptionBlock
              title="Veggie"
              subOptionBlock={true}
              options={vegPizzas}
              selectFunction={chooseOption}
              mdSizeSelected={mdSizeSelected}
              prevBlockSelected={crustSelected}
            />
            <OptionBlock
              title="Meat"
              subOptionBlock={true}
              options={meatPizzas}
              selectFunction={chooseOption}
              mdSizeSelected={mdSizeSelected}
              prevBlockSelected={crustSelected}
            />
          </div>
          <OptionCheckBlock
            title={extraToppingTitle}
            options={extraToppings}
            selectFunction={chooseOption}
            prevBlockSelected={styleSelected}
          />
        </Col>
      </Row>
      <ResetModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        resetOrder={() => resetOrder()}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log("cart", state.pizzas.cart);
  return {
    pizzaSizes: state.pizzas.pizzaOptions.filter((option) => {
      return option.category === "Size";
    }),
    crustTypes: state.pizzas.pizzaOptions.filter((option) => {
      return option.category === "Crust";
    }),
    pizzaStyles: state.pizzas.pizzaOptions.filter((option) => {
      return option.category === "Style";
    }),
    extraToppings: state.pizzas.pizzaOptions.filter((option) => {
      return option.category === "Extra Topping";
    }),
    mdSizeSelected: state.pizzas.mdSizeSelected,
    subtotalItems: state.pizzas.subtotalItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseOption: (category, toppingId) =>
      dispatch(chooseOption(category, toppingId)),
    resetOrder: () => dispatch(resetOrder()),
    addToCart: () => dispatch(addToCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
