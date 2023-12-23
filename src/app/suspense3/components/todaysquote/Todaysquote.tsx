"use client";

import { useEffect, useState } from "react";
import styles from "./Todaysquote.module.css";

type Cocktail = {
  content: string;
  author: string;
};

export default function Todaysquote() {
  const [todaysquote, setTodaysquote] = useState<Cocktail>();

  useEffect(function () {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        setTodaysquote(data[0]);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headTitle}>Today&apos;s List</div>
      <div className={styles.content}>{`"${todaysquote?.content}"`}</div>
      <div className={styles.author}>{todaysquote?.author}</div>
    </div>
  );
}
