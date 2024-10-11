"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Theme from "./components/theme/Theme";
import Header from "./components/Header";
import NoiseBackground from "./components/noise/NoiseBackground";
import Design from "./components/Design";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.page}>
      <Theme />
      <Header />
      <Design />
      <NoiseBackground />
    </div>
  );
}
