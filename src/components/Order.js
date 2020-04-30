import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
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
        <Col md={6}>
          <Image
            className="preview-img mb-3"
            src="https://www.blazepizza.com/assets/images/BYO_Large_1684x1114.jpg"
          />
          <SubtotalContainer
            items={[
              {
                id: 1,
                name: "Sriracha Chicken & Avocado",
                value: "+$3.50",
                selected: false,
                disabled: false,
              },
              {
                id: 2,
                name: "Spicy Pulled Pork with Scallion",
                value: "+$3.50",
                selected: false,
                disabled: false,
              },
              {
                id: 3,
                name: "Sriracha Chicken & Avocado",
                value: "+$3.50",
                selected: false,
                disabled: false,
              },
              {
                id: 4,
                name: "Spicy Pulled Pork with Scallion",
                value: "+$3.50",
                selected: false,
                disabled: false,
              },
              {
                id: 5,
                name: "Sriracha Chicken & Avocado",
                value: "+$3.50",
                selected: false,
                disabled: false,
              },
            ]}
          />
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
            options={[
              {
                id: 1,
                name: "Medium (12-inch)",
                value: "+$11.50",
                active: true,
                disabled: false,
              },
              {
                id: 2,
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
                id: 1,
                name: "Regular",
                value: "+$0.00",
                active: false,
                disabled: false,
              },
              {
                id: 2,
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
                  id: 1,
                  name: "Cheese",
                  value: "+$0.00",
                  active: false,
                  disabled: false,
                },
                {
                  id: 2,
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
                  id: 1,
                  name: "Butternut Squash, Ricotta & Cranberry",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 2,
                  name: "Fresh Mushrooms & Roasted Cauliflower",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 3,
                  name: "Eggplant, Ricotta & Basil",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 4,
                  name: "Fresh Mushrooms, Manchego & Herb",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 5,
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
                  id: 1,
                  name: "Pepperoni",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 2,
                  name: "Chicken, Roasted Pears & Fontina",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 3,
                  name: "Fresh Pineapple, Bacon & Hot Honey",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 4,
                  name: "Sriracha Chicken & Avocado",
                  value: "+$3.50",
                  selected: false,
                  disabled: false,
                },
                {
                  id: 5,
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

export default Order;
