import Image from "next/image";
import styles from "../styles/design.module.css"; // Create a CSS module for styling

const Design = () => {
  return (
    <div className={styles.container}>
      <div className={styles.largeBar}></div>
      <div className={styles.smallBar}></div>
    </div>
  );
};

export default Design;
