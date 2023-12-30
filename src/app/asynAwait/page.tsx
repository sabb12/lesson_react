"use client";

import { Suspense } from "react";
import BitcoinList from "./components/bitcoinList/BitconList";
import CocktailList from "./components/cocktailList/CocktailList";
import Todaysquote from "./components/todaysquote/Todaysquote";
import styles from "./page.module.css";
import Loader from "./components/Loader/Loader";
import dynamic from "next/dynamic";
import { fetchTodaysquote } from "./services";
import { QueryClient, QueryClientProvider } from "react-query";
//상대 경로, 절대 결로

// compoent밖에다 선언 하는 것
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      cacheTime: 1000 * 10,
      staleTime: 0,
    },
  },
});

function Suspense4() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.wrapper}>
        <div className={`${styles.section} ${styles.cocktailList}`}>
          <CocktailList />
        </div>
        <div className={`${styles.section} ${styles.bitcoinRank}`}>
          <BitcoinList />
        </div>
        <div className={`${styles.section} ${styles.todyasQuote}`}>
          <Suspense fallback={<Loader />}>
            <Todaysquote fetchData={fetchTodaysquote} />
          </Suspense>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default dynamic(
  function () {
    return Promise.resolve(Suspense4);
  },
  { ssr: false }
);
