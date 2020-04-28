import React from "react";
import { connect } from "react-redux";

const SubtotalContainer = (props) => {
  console.log(props.pizzaList);
  return <div>Hello from SubtotalContainer</div>;
};

const mapStateToProps = (state) => {
  return {
    pizzaList: state.pizzaList,
  };
};

export default connect(mapStateToProps, null)(SubtotalContainer);
