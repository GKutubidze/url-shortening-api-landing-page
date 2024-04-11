"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./ShortenComponent.module.css";
import shortenUrl from "@/app/utils/shortenUrl";
import GeneratedUrl from "../GeneratedUrl/GeneratedUrl";
interface Props {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  tempUrl: string;
  setTempUrl: React.Dispatch<React.SetStateAction<string>>;
}
const ShortenComponent = (props: Props) => {
  const { url, setUrl, tempUrl, setTempUrl } = props;
  const [isCklicked, setIsClcked] = useState<boolean>(true);
  const [startingUrl,setStartingUrl]=useState<string>("");
  console.log(isCklicked)
  const handleClick = () => {
     setStartingUrl(tempUrl);
    shortenUrl(tempUrl)
      .then((shortUrl) => {
        if (shortUrl) {
          console.log("Shortened URL:", shortUrl);
          setUrl(shortUrl);
        } else {
          console.log("Failed to shorten URL.");
        }
      })
      .catch((error) => console.error("Error occurred:", error));
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={styles.input}
          value={tempUrl}
          onChange={(e) => {
            setTempUrl(e.target.value);
          }}
        />
        <button className={styles.button} onClick={handleClick}>
          {" "}
          Shorten It!
        </button>
      </div>
      <GeneratedUrl startingUrl={startingUrl} generatedUrl={url}  isCklicked={isCklicked}/>
    </div>
  );
};

export default ShortenComponent;
