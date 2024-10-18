import React from "react";
import styles from "../../styles/topnav.module.css";

const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      {/* Add your navigation items here */}
      <ul>
        <li>
          <a href="/">
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/about">
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
