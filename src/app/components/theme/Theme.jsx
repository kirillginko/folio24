"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "../../styles/theme.module.css";

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={styles.themeToggleContainer}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
