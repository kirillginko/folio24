import React from "react";
import styles from "../../styles/gridlayout.module.css";

const CircleOverlay = ({ rowCount, columnCount }) => {
  const circles = [];

  for (let row = 0; row <= rowCount; row++) {
    for (let col = 0; col <= columnCount; col++) {
      const key = `circle-${row}-${col}`;
      const style = {
        left: `${(col / columnCount) * 100}%`,
        top: `${(row / rowCount) * 100}%`,
      };
      circles.push(<div key={key} className={styles.circle} style={style} />);
    }
  }

  return <div className={styles.circleOverlay}>{circles}</div>;
};

export default CircleOverlay;
