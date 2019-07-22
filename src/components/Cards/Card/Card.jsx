import React from "react";
import classes from './Card.module.scss';

const Card = props => {
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

  const listButtons = numbers.map((number)=>
      <button>{number}</button>
  )

  return <div className={classes.Card}><p>{props.number}</p>{listButtons}</div>;
};

export default Card;
