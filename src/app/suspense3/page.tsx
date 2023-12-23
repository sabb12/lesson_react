// page에다 "use client을 사용 해야된다"
"use client";

import { Suspense } from "react";
import BitcoinList from "./components/bitcoinList/BitconList";
import CocktailList from "./components/cocktailList/CocktailList";
import Todaysquote from "./components/todaysquote/Todaysquote";
import styles from "./page.module.css";
import Loader from "./components/Loader/Loader";
import { fetchCocktailList } from "./services";
import dynamic from "next/dynamic";
//상대 경로, 절대 결로
function Suspense3() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.section} ${styles.cocktailList}`}>
        {/*방법 2*/}
        <Suspense fallback={<Loader />}>
          <CocktailList fetchList={fetchCocktailList} />
        </Suspense>
      </div>
      <div className={`${styles.section} ${styles.bitcoinRank}`}>
        <BitcoinList />
      </div>
      <div className={`${styles.section} ${styles.todyasQuote}`}>
        <Todaysquote />
      </div>
    </div>
  );
}

export default dynamic(
  function () {
    return Promise.resolve(Suspense3);
  },
  { ssr: false }
);
