"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Kirill Ginko</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <div className={styles.description}>
        <p>
          I create animated and{" "}
          <span className={styles.highlight}>interactive websites.</span> I am
          usually working with agencies, startups, brands, associations and
          other freelancers. I have already worked with renowned clients such
          as:{" "}
          <span className={styles.highlight}>
            Jam3, Chanel, Cher Ami, La Phase 5, Funkhaus, Screen-club...
          </span>
        </p>
      </div>
    </div>
  );
}
