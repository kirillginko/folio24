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
            <p>
              <span className={styles.type}>W</span> WEBSITES
            </p>
            <p>
              <span className={styles.type}>EC</span> E-COMMERCE
            </p>
            <p>
              <span className={styles.type}>IN</span> INSTALLATIONS
            </p>
            <p>
              <span className={styles.type}>EX</span> EXHIBITIONS
            </p>
            <p>
              <span className={styles.type}>PF</span> PORTFOLIO
            </p>
            <p>
              <span className={styles.type}>MG</span> MOTION GRAPHICS
            </p>
            <p>
              <span className={styles.type}>D</span> DESIGN / CONCEPT
            </p>
            <p>
              <span className={styles.type}>DV</span> DEVELOPMENT
            </p>
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
