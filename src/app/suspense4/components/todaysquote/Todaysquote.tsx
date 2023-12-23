// "use client";

import { useEffect, useState } from "react";
import styles from "./Todaysquote.module.css";
import { useQuery } from "react-query";

type Todayquote = {
  content: string;
  author: string;
};

type Props = {
  fetchData: () => Promise<Todayquote>;
};

export default function Todaysquote({ fetchData }: Props) {
  // const quotes = queryResult1.data; same
  const { data: todaysquote } = useQuery<unknown, unknown, Todayquote>(
    ["quotes"],
    fetchData
  );

  // const [todaysquote, setTodaysquote] = useState<Cocktail>();

  // useEffect(function () {
  //   fetch("https://api.quotable.io/quotes/random")
  //     .then((response) => response.json())
  //     .then(function (data) {
  //       console.log(data);
  //       setTodaysquote(data[0]);
  //     });
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headTitle}>Today&apos;s List</div>
      <div className={styles.content}>{`"${todaysquote?.content}"`}</div>
      <div className={styles.author}>{todaysquote?.author}</div>
    </div>
  );
}
