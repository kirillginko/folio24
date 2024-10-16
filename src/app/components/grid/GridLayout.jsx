import React from "react";
import styles from "../../styles/gridlayout.module.css";

const GridLayout = ({ children }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Kirill Ginko</h1>
        </div>
        <div className={styles.viewByType}>
          <div>VIEW BY TYPE</div>
          <div className={styles.typeDefinition}>
            <span>W</span>
            <span>WEBSITES</span>
          </div>
          {/* Add more type definitions here */}
        </div>
      </div>
      {children}
    </div>
  );
};

export default GridLayout;
