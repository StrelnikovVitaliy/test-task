import React, { Component } from "react";

import classes from "./Cards.module.scss";

import Card from "./Card";

class Cards extends Component {
  state={
    active: false
  }
  render() {
    return (
      <div className={classes.Cards}>
        <Card number={1} />
        <Card number={2} />
        <Card number={3} />
        <Card number={4} />
      </div>
    );
  }
}

export default Cards;
