import React from "react";
import styles from "./HeaderDesktop.module.css";
import Image from "next/image";
import logo from "./../../../../public/logo.svg";
import Link from "next/link";

export const HeaderDesktop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src={logo}
            alt="Header Logo"
            className={styles.img}
            priority={true}
          />
        </Link>

        <div className={styles.nav}>
          {Data.map((item, key) => {
            return (
              <Link key={key} href="#" className={styles.link}>

                <span className={styles.navItem} >{item.name}</span>
                </Link>
             );
          })}
        </div>
      </div>

      <div className={styles.auth}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </div>
  );
};

const Data = [
  {
    id: 1,
    name: "features",
  },
  {
    id: 2,

    name: "pricing",
  },
  {
    id: 2,

    name: "resources",
  },
];
