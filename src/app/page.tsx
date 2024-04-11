"use client";
import { useState } from "react";
import { AdvancedStats } from "./components/AdvancedStats/AdvancedStats";
import ContentComponent from "./components/ContentComponent/ContentComponent";
import Footer from "./components/Footer/Footer";
 import ShortenComponent from "./components/ShortenComponent/ShortenComponent";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import GeneratedUrl from "./components/GeneratedUrl/GeneratedUrl";

export default function Home() {
  const [url,setUrl]=useState<string>(" ");
  const [tempUrl, setTempUrl] = useState<string>("");

  console.log(url);
   return (
    <main className={styles.main}>
      <Header />
      <ContentComponent />
      <div style={{ backgroundColor: "#EFF0F7" }}>
      <ShortenComponent url={url} setUrl={setUrl} tempUrl={tempUrl} setTempUrl={setTempUrl} />

      </div>
      <AdvancedStats />
      <Footer />
    </main>
  );
}
 