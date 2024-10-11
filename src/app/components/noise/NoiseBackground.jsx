import React, { useEffect } from "react";
import Noise from "./Noise";
import styles from "../../styles/noise.module.css";

const NoiseBackground = () => {
  useEffect(() => {
    Noise(); // Initialize the noise effect
  }, []);

  return <canvas id="noise" className={styles.noise}></canvas>;
};

export default NoiseBackground;
