import React from "react";
import styles from "./ContentComponent.module.css";
import illustration from "../../../../public/illustration-working.svg";
import illustrationDestop from "../../../../public/working-with-computer.svg";
import Image from "next/image";
type Props = {
  width: number;
};
const ContentComponent = (props: Props) => {
  return (
    <div className={styles.main}>
      <div>
        {props.width < 1024 ? (
          <Image
            src={illustration}
            alt="illustration-working"
            className={styles.img}
            priority
          />
        ) : (
          <Image
            src={illustrationDestop}
            alt="illustration-working"
            className={styles.img}
            priority
          />
        )}
      </div>

      <div className={styles.container}>
        <p className={styles.title}>More than just shorter links</p>
        <p className={styles.content}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default ContentComponent;
