import React from "react";
import styles from "./AdvancedStats.module.css";
import AdvancedItem from "./AdvancedItem";
import Data from "../../../../public/data.json";
export const AdvancedStats = () => {
  return (
    <div className={styles.main}>
      <div className={styles.advanced}>
        <p className={styles.title}>Advanced Statistics</p>
        <p className={styles.content}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className={styles.itemContainer}>
      {Data.map((item, key) => (
          <React.Fragment key={key}>
            <AdvancedItem
              key={key}
              title={item.title}
              content={item.content}
              img={item.img}
            />
            {key !== Data.length - 1 && <div className={styles.divider}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
