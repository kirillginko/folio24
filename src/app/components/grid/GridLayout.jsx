import React from "react";
import styles from "../../styles/gridlayout.module.css";
import LeftColumn from "./LeftColumn"; // Import the LeftColumn component

const GridLayout = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <LeftColumn /> {/* Add the LeftColumn component here */}
      <div className={styles.gridContainer}>
        {React.Children.map(children, (child) => (
          <div className={styles.gridItemWrapper}>
            <div className={styles.gridItemBorder}></div>
            <div className={styles.gridItemContent}>{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
