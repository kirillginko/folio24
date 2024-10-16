"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Theme from "./components/theme/Theme";
import Header from "./components/Header";
import NoiseBackground from "./components/noise/NoiseBackground";
import Fluid from "./components/fluid/Fluid";
import GridMain from "./components/grid/GridMain";
import Footer from "./components/Footer";
import React from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const toggleFooter = () => {
    setIsFooterVisible(!isFooterVisible);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.pageContainer}>
      <Fluid theme={resolvedTheme} />
      <main className={styles.contentWrap}>
        <Theme />
        <NoiseBackground />
        <GridMain />
      </main>
      <Footer isVisible={isFooterVisible} />
      <button
        className={styles.toggleButton}
        onClick={toggleFooter}
        aria-label={isFooterVisible ? "Hide Footer" : "Show Footer"}
      >
        {isFooterVisible ? "▼" : "▲"}
      </button>
    </div>
  );
}
