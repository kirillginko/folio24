import React from "react";
import styles from "../../styles/gridlayout.module.css";

const GridItem = ({ title, types }) => {
  return (
    <div className={styles.gridItem}>
      <div className={styles.projectTitle}>{title}</div>
      <div className={styles.projectTypes}>
        {types.map((type, index) => (
          <div key={index} className={styles.projectType} title={type}></div>
        ))}
      </div>
    </div>
  );
};

export default GridItem;
