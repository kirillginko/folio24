import React from "react";
import styles from "../../styles/gridlayout.module.css";
import LeftColumn from "./LeftColumn"; // Import the LeftColumn component
// Import the TopNav component
import TopNav from "./TopNav";
import BottomNav from "./BottomNav"; // Import the BottomNav component

const GridLayout = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <TopNav />
      <div className={styles.contentContainer}>
        <LeftColumn />
        <div className={styles.gridContainer}>
          {React.Children.map(children, (child) => (
            <div className={styles.gridItemWrapper}>
              <div className={styles.gridItemBorder}></div>
              <div className={styles.gridItemContent}>{child}</div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav /> {/* Add the BottomNav component here */}
    </div>
  );
};

export default GridLayout;
