import React from "react";
import styles from "../../styles/gridlayout.module.css";

const LeftColumn = () => {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.leftColumnContent}>
        <h1>Kirill Ginko</h1>
        <div className={styles.viewByType}>
          <h2>VIEW BY TYPE</h2>
          <ul>
            <li>
              <span className={styles.type}>W</span> WEBSITES
            </li>
            <li>
              <span className={styles.type}>EC</span> E-COMMERCE
            </li>
            <li>
              <span className={styles.type}>IN</span> INSTALLATIONS
            </li>
            <li>
              <span className={styles.type}>EX</span> EXHIBITIONS
            </li>
            <li>
              <span className={styles.type}>PF</span> PORTFOLIO
            </li>
            <li>
              <span className={styles.type}>MG</span> MOTION GRAPHICS
            </li>
            <li>
              <span className={styles.type}>D</span> DESIGN / CONCEPT
            </li>
            <li>
              <span className={styles.type}>DV</span> DEVELOPMENT
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.about}>
        <p>ABOUT</p>
        <p>@Kirill.Ginko</p>
        <p>Kirill@YsS.SERVICES</p>
      </div>
    </div>
  );
};

export default LeftColumn;
