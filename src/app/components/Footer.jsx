import React, { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";

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
          <p>kirill@kirillginko.com</p>
          <p>+301 512 4249</p>
          <p>Instagram</p>
          <p>Github</p>
        </div>
        <div className={styles.centerText}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sunt
            quam ab tempora dolorum commodi repellendus, nihil provident officia
            autem voluptates in corrupti accusamus similique obcaecati amet
            blanditiis tempore odit suscipit exercitationem. Soluta magnam
            molestiae laboriosam veniam. Temporibus sint dolores, at maiores,
            recusandae dolor ad reiciendis iure quas aliquid totam.
          </p>
        </div>
        <div className={styles.rightText}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            porro ut sequi eius deserunt tempore et placeat, minima veritatis
            consequuntur eos autem corrupti?
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Kirill Ginko</p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Kirill.Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
