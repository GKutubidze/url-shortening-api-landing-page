import React from "react";
import styles from "./ConditionalNav.module.css";
import Link from "next/link";
const ConditionalNav = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {["Features", "Pricing", "Resources"].map((item, key) => {
          return (
            <Link key={key} href="#" className={styles.link}>
              <p className={styles.item}>{item}</p>
            </Link>
          );
        })}
      </div>

      <div className={styles.auth}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </div>
  );
};

export default ConditionalNav;
