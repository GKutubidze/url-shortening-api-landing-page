"use client";
import { useState } from "react";
import { AdvancedStats } from "./components/AdvancedStats/AdvancedStats";
import ContentComponent from "./components/ContentComponent/ContentComponent";
import Footer from "./components/Footer/Footer";
import ShortenComponent from "./components/ShortenComponent/ShortenComponent";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import useWindowWidth from "./hooks/useWindowWidth";

export default function Home() {
  const width = useWindowWidth();
  const [url, setUrl] = useState<string>(" ");
  const [tempUrl, setTempUrl] = useState<string>("");

  console.log(url);
  return (
    <main className={styles.main}>
      <Header />
      <ContentComponent width={width} />
      <div className={styles.ShortenCompContainer}>
        <ShortenComponent
          url={url}
          setUrl={setUrl}
          tempUrl={tempUrl}
          setTempUrl={setTempUrl}
        />
      </div>
      <AdvancedStats />
      <Footer />
    </main>
  );
}
