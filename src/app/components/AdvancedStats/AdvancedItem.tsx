import React from "react";
import styles from "./AdvancedItem.module.css";
import Image from "next/image";
import ImageComponent from "../ImageComponent/ImageComponent";
interface Props {
  img: string;
  title: string;
  content: string;
}
const AdvancedItem = (props: Props) => {
  const { img, title, content } = props;
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image src={img} alt={title} width={40} height={40} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default AdvancedItem;
