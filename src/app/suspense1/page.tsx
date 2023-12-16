import BitcoinList from "./components/bitcoinList/BitconList";
import CocktailList from "./components/cocktailList/CocktailList";
import Todaysquote from "./components/todaysquote/Todaysquote";
import styles from "./page.module.css";
//상대 경로, 절대 결로
export default function Suspense1() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.section} ${styles.cocktailList}`}>
        <CocktailList />
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
