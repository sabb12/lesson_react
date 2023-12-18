"use client";

import { useEffect, useState } from "react";
import styles from "./BitconList.module.css";

type Bitcoin = {
  supply: string;
  name: string;
  rank: string;
};

export default function BitconList() {
  const [bitconList, setBitconList] = useState<Bitcoin[]>([]);

  useEffect(function () {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        setBitconList(data.data.slice(0, 10));
      });
  }, []);

  // console.log(bitconList.slice(0, 10));
  return (
    <div className={styles.wrapper}>
      <div className={styles.headTitle}>Bitcoin Rank</div>
      <div className={styles.container}>
        {bitconList.map((bitcoin, i) => {
          return (
            <div key={i} className={styles.cockTailContainer}>
              <div className={styles.rank}>{bitcoin.rank}</div>
              <div className={styles.infoContainer}>
                <div className={styles.title}>{bitcoin.name}</div>
                {/* alt = 음성으로 지원해 줄수 있고, image 보여줄수 없을 때 대체 방법 */}
                <div className={styles.maxSupply}>{bitcoin.supply}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
