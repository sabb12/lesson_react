// "use client";
// use를 사용 할려면 "use client" 사용 하면 안된다

import { use, useEffect, useState } from "react";
import styles from "./CocktailList.module.css";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type Props = {
  fetchList: () => Promise<Cocktail[]>;
};

export default function CocktailList({ fetchList }: Props) {
  // const [cockTailList, setCocktailList] = useState<Cocktail[]>([]);
  const list: Cocktail[] = use(fetchList());

  // useEffect(function () {
  //   fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
  //     .then((response) => response.json())
  //     .then(function (data) {
  //       setCocktailList(data.drinks);
  //     });
  // }, []);
  // .slice(0, 10)

  return (
    <div className={styles.wrapper}>
      <div className={styles.headTitle}>Cocktail List</div>
      <div className={styles.container}>
        {list.map((cockTail, i) => {
          return (
            <div key={i} className={styles.cockTailContainer}>
              {/* alt = 음성으로 지원해 줄수 있고, image 보여줄수 없을 때 대체 방법 */}
              <img
                className={styles.image}
                src={cockTail.strDrinkThumb}
                alt="cocktailimage"
              />
              <div className={styles.title}>{cockTail.strDrink}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
