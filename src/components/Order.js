import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import SubtotalContainer from "./containers/SubtotalContainer";
import OptionBlock from "./tiles/OptionBlock";
import OptionCheckBlock from "./tiles/OptionCheckBlock";
import { chooseOption } from "../modules/pizzas";

const Order = ({
  pizzaSize,
  crustType,
  pizzaStyle,
  chooseOption,
  subtotalItems,
}) => {
  const history = useHistory();
  const cheesePizzas = pizzaStyle.filter((pizza) => pizza.type === "cheese");
  const vegPizzas = pizzaStyle.filter((pizza) => pizza.type === "veg");
  const meatPizzas = pizzaStyle.filter((pizza) => pizza.type === "meat");

  const handleContinue = () => {
    history.push("/icarb/checkout");
  };

  return (
    <Container className="mt-5 mx-auto">
      <Row>
        <Col md={6}>
          <Image className="preview-img mb-3" src="/icarb/images/cheese.jpeg" />
          <SubtotalContainer items={subtotalItems} />
          <div className="line-below">
            <Button className="mb-3" block={true} onClick={handleContinue}>
              Continue
            </Button>
            <Button
              className="mb-3"
              variant="outline-info"
              block={true}
              onClick={() => alert("add to cart")}
            >
              Add To Cart & Build Another
            </Button>
          </div>
          <Button
            variant="outline-danger"
            block={true}
            onClick={() => alert("reset")}
          >
            Reset Order
          </Button>
        </Col>
        <Col md={6} className="order-options-column">
          <div className="fs-2 fw-5">Start Order</div>
          <div className="mb-5">
            Select from our list of gourmet pies or build your own.
          </div>
          <OptionBlock
            title="Choose your size."
            options={pizzaSize}
            sizeBlock={true}
            selectFunction={chooseOption}
          />
          <OptionBlock
            title="Choose your crust."
            options={crustType}
            selectFunction={chooseOption}
          />
          <div className="option-block">
            <div className="my-3 fw-5">Choose from our House Specials.</div>
            <OptionBlock
              title="Cheese"
              subOptionBlock={true}
              options={cheesePizzas}
              selectFunction={chooseOption}
            />
            <OptionBlock
              title="Veggie"
              subOptionBlock={true}
              options={vegPizzas}
              selectFunction={chooseOption}
            />
            <OptionBlock
              title="Meat"
              subOptionBlock={true}
              options={meatPizzas}
              selectFunction={chooseOption}
            />
          </div>
          <OptionCheckBlock
            title="Choose extra toppings. +$2.50 each"
            options={[
              { id: 1, name: "Avocado" },
              { id: 2, name: "Bacon" },
              { id: 3, name: "Basil" },
              { id: 4, name: "Buffalo Cauliflower" },
              { id: 5, name: "Butternut Squash" },
              { id: 6, name: "Caramelized Pears" },
              { id: 7, name: "Cauliflower" },
              { id: 8, name: "Cranberry" },
              { id: 9, name: "Eggplant" },
              { id: 10, name: "Fresh Pineapple" },
              { id: 11, name: "Green Pepper" },
              { id: 12, name: "Hot Honey" },
              { id: 13, name: "Kalamata Olives" },
              { id: 14, name: "Mango" },
              { id: 15, name: "Mashed Potato" },
              { id: 16, name: "Mushroom Medley" },
              { id: 17, name: "Pepperoni" },
              { id: 18, name: "Pulled Pork" },
              { id: 19, name: "Red Peppadew Pepper" },
              { id: 20, name: "Roasted Chicken" },
              { id: 21, name: "Roasted Garlic" },
              { id: 22, name: "Sausage" },
              { id: 23, name: "Scallions" },
              { id: 24, name: "Spicy Pulled Pork" },
              { id: 25, name: "Spinach" },
              { id: 26, name: "Sriracha Chicken" },
              { id: 27, name: "Tomato" },
              { id: 28, name: "Vidalia Onion" },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaSize: state.pizzas.pizzaOptions.filter((option) => {
      return option.category === "Size";
    }),
    crustType: state.pizzas.pizzaOptions.filter((option) => {
      return option.category === "Crust";
    }),
    pizzaStyle: state.pizzas.pizzaOptions.filter((option) => {
      return option.category === "Style";
    }),
    subtotalItems: state.pizzas.subtotalItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseOption: (category, toppingId) =>
      dispatch(chooseOption(category, toppingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
