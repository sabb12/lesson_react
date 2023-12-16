"use client";

import { useEffect, useState } from "react";
import styles from "./Todaysquote.module.css";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export default function Todaysquote() {
  const [todaysquote, setTodaysquote] = useState<Cocktail[]>([]);

  useEffect(function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => response.json())
      .then(function (data) {
        setTodaysquote(data.drinks);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      {todaysquote.map((cockTail, i) => {
        return (
          <div key={i} className={styles.cockTailContainer}>
            <div className={styles.title}>{cockTail.strDrink}</div>
            {/* alt = 음성으로 지원해 줄수 있고, image 보여줄수 없을 때 대체 방법 */}
            <img
              className={styles.image}
              src={cockTail.strDrinkThumb}
              alt="cocktailimage"
            />
          </div>
        );
      })}
    </div>
  );
}
