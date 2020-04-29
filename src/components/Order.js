import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import SubtotalContainer from "./containers/SubtotalContainer";
import OptionBlock from "./tiles/OptionBlock";
import OptionCheckBlock from "./tiles/OptionCheckBlock";

const Order = (props) => {
  const history = useHistory();
  const handleContinue = () => {
    history.push("/icarb/checkout");
  };
  return (
    <Container className="mt-5 mx-auto">
      <Row>
        <Col md={6} className="pr-3 order-options-column">
          <div className="fs-2 fw-5">Start Order</div>
          <div className="mb-5">
            Select from our list of gourmet pies or build your own.
          </div>
          <OptionBlock
            title="Choose your size."
            options={[
              {
                name: "Medium (12-inch)",
                value: "+$11.50",
                active: true,
                disabled: false,
              },
              {
                name: "Large (16-inch)",
                value: "+$16.25",
                selected: false,
                disabled: false,
              },
            ]}
          />
          <OptionBlock
            title="Choose your crust."
            options={[
              {
                name: "Regular",
                value: "+$0.00",
                active: false,
                disabled: false,
              },
              {
                name: "Gluten-free",
                value: "+$2.00",
                selected: false,
                disabled: false,
              },
            ]}
          />
          <div className="option-block">
            <div className="my-3 fw-5">Choose from our House Specials.</div>
            <OptionBlock
              title="Cheese"
              subOptionBlock={true}
              options={[
                {
                  name: "Cheese",
                  value: "+$0.00",
                  active: false,
                  disabled: false,
                },
                {
                  name: "Four Cheese",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
              ]}
            />
            <OptionBlock
              title="Veggie"
              subOptionBlock={true}
              options={[
                {
                  name: "Butternut Squash, Ricotta & Cranberry",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Fresh Mushrooms & Roasted Cauliflower",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Eggplant, Ricotta & Basil",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Fresh Mushrooms, Manchego & Herb",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Spinach, Kalamata Olive & Roasted Garlic",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
              ]}
            />
            <OptionBlock
              title="Meat"
              subOptionBlock={true}
              options={[
                {
                  name: "Pepperoni",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Chicken, Roasted Pears & Fontina",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Fresh Pineapple, Bacon & Hot Honey",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Sriracha Chicken & Avocado",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  name: "Spicy Pulled Pork with Scallion",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
              ]}
            />
          </div>
          <OptionCheckBlock
            title="Choose extra toppings. +$2.50 each"
            options={[
              { name: "Avocado" },
              { name: "Bacon" },
              { name: "Basil" },
              { name: "Buffalo Cauliflower" },
              { name: "Butternut Squash" },
              { name: "Caramelized Pears" },
              { name: "Cauliflower" },
              { name: "Cranberry" },
              { name: "Eggplant" },
              { name: "Fresh Pineapple" },
              { name: "Green Pepper" },
              { name: "Hot Honey" },
              { name: "Kalamata Olives" },
              { name: "Mango" },
              { name: "Mashed Potato" },
              { name: "Mushroom Medley" },
              { name: "Pepperoni" },
              { name: "Pulled Pork" },
              { name: "Red Peppadew Pepper" },
              { name: "Roasted Chicken" },
              { name: "Roasted Garlic" },
              { name: "Sausage" },
              { name: "Scallions" },
              { name: "Spicy Pulled Pork" },
              { name: "Spinach" },
              { name: "Sriracha Chicken" },
              { name: "Tomato" },
              { name: "Vidalia Onion" },
            ]}
            n
          />
        </Col>
        <Col md={6}>
          Hello from right column
          <SubtotalContainer />
          <Button onClick={handleContinue}>Continue</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
