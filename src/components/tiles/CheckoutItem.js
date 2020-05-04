import React from "react";
import { Row } from "react-bootstrap";

const CheckoutItem = ({ pizzaOptions }) => {
  const optionNames = pizzaOptions.map((option) => {
    return (
      <div md={12} key={option.id}>
        {option.name} Awesome
      </div>
    );
  });
  return <div md={12}>{optionNames}</div>;
};

export default CheckoutItem;
