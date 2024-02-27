import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layout/subWorkNavbar.module.css";

function SubWorkNavbar() {
  return (
    <nav className={styles.subWorkNavbar}>
      <ul className={styles.ulItems}>
        <li>
          <Link to="/subworklayout/bmw">BMW</Link>
        </li>
        <li>
          <Link to="/subworklayout/bugatti">Bugatti</Link>
        </li>
        <li>
          <Link to="/subworklayout/ferrari">Ferrari</Link>
        </li>
        <li>
          <Link to="/subworklayout/lamborghini">Lamborghini</Link>
        </li>
        <li>
          <Link to="/subworklayout/mercedes">Mercedes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SubWorkNavbar;
