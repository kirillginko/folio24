import React from "react";
import styles from "../../styles/gridlayout.module.css";

const GridItem = ({ title, types }) => {
  return (
    <div className={styles.gridItem}>
      <p>{title}</p>
      <div className={styles.spacer}></div>{" "}
      {/* This ensures a last child for bottom circles */}
    </div>
  );
};

export default GridItem;
