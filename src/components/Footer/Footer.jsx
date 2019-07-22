import React from "react";
import classes from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Column}>
        <p>Разделы</p>

        <ul>
          <li>
            <a href="/">Меню</a>
          </li>
          <li>
            <a href="/">Документы</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
        </ul>
      </div>
      <div className={classes.Column}>
        <p>Разделы</p>

        <ul>
          <li>
            <a href="mailto:test@test.us">test@test.us</a>
          </li>
          <li>
            <a href="tel:380638514392">+38(063)851-43-92</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
        </ul>
      </div>

      <div className={classes.Column}>
        <p>Разделы</p>

        <ul>
          <li>
            <a href="/">Меню</a>
          </li>
          <li>
            <a href="/">Документы</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
        </ul>
      </div>
      <div className={classes.Column}>
        <p>Coц сети</p>
        <ul className={classes.Socials}>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
