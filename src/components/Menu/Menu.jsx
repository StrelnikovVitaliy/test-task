import React from "react";
import classes from "./Menu.module.scss";
const Menu = () => {
  return (
    <div className={classes.Menu}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Winners</a>
        </li>
        <li>
          <a href="/">Doc's</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
