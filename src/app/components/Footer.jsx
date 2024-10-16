import React, { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";
import Marquee from "react-fast-marquee";

const Footer = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) setShouldRender(true);
  }, [isVisible]);

  const onAnimationEnd = () => {
    if (!isVisible) setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <footer
      className={`${styles.footer} ${isVisible ? styles.footerVisible : ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className={styles.gridContainer}>
        <h1 className={styles.header}>Lets work together!</h1>
        <div className={styles.leftLinks}>
          <p>
            <a href="mailto:kirill@kirillginko.com">kirill@kirillginko.com</a>
          </p>
          <p>
            <a href="tel:+3015124249">+301 512 4249</a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/co_existenz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://github.com/kirillginko"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <div className={styles.centerText}>
          <p>
            Specializing in Next.js, React, Three.js, and WebGL. With a passion
            for crafting immersive web experiences, I bring a blend of
            creativity and technical expertise to every project. Whether
            building dynamic user interfaces or integrating cutting-edge 3D
            graphics, I strive to push the boundaries of what&apos;s possible on
            the web. Don&apos;t hesitate to reach out if you have any questions
            or just want to chat!
          </p>
        </div>
        <div className={styles.rightText}>
          <p>
            I believe in the power of storytelling through design, and I&apos;m
            dedicated to bringing your ideas to life in innovative ways that
            inspire and engage. I&apos;m always open to new opportunities and
            collaborations.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <Marquee gradient={false} speed={50}>
          <p className={styles.title}>Kirill Ginko</p>
          <p className={styles.title}>kirill@kirillginko.com</p>
          <p className={styles.title}>New York, NY</p>
          <p className={styles.title}>{new Date().toLocaleTimeString()}</p>
          <p className={styles.copyright}>{new Date().getFullYear()}</p>
          <p className={styles.copyright}>All rights reserved.</p>
          <p className={styles.copyright}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22.6337 1.63323L1.63348 22.6335M1.63348 22.6335L18.8978 22.6335M1.63348 24.1311L1.63348 5.3692" />
            </svg>
          </p>
        </Marquee>
      </div>
    </footer>
  );
};

export default Footer;
