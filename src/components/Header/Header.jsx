import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="logo" />
      </div>
      <div className={classes.City}>
        <select>
          <option value="1">Киев</option>
          <option value="2">Львов</option>
          <option value="3">Черкасы</option>
        </select>
      </div>
      <div className={classes.Navigation}>
        <button>Reg</button>
        <button>Log in</button>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Header;
