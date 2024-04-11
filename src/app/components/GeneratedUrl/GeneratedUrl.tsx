"use client";
import React, { useState } from "react";
import styles from "./GeneratedUrl.module.css";
import truncateUrl, { truncateUrlByWidth } from "@/app/utils/truncateUrl";
import Link from "next/link";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import copyToClipboard from "@/app/utils/copyToClipboard";
interface Props {
  startingUrl: string;
  generatedUrl: string;
  isCklicked: boolean;
}
const GeneratedUrl = (props: Props) => {
  const width = useWindowWidth();
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const { startingUrl, generatedUrl, isCklicked } = props;
   if (startingUrl && isCklicked)
    return (
      <div className={styles.main}>
        <Link href={startingUrl} className={styles.link} target="_blank">
          <p className={styles.startingUrl}>
            {truncateUrlByWidth(startingUrl, width)}
          </p>
        </Link>
        <div className={styles.container}>
          <Link href={generatedUrl} className={styles.link} target="_blank">
            <p className={styles.generatedUrl}>{generatedUrl}</p>
          </Link>
          <button
            className={styles.button}
            onClick={() => copyToClipboard(generatedUrl, isCopy, setIsCopy)}
          >
            {isCopy ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    );
};

export default GeneratedUrl;
