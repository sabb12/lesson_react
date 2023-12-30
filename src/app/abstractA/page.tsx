"use client";

import dayjs from "dayjs";
import styles from "./page.module.css";
import CoffeeMaker from "./components/CoffeeMaker";
import NonCoffeeMaker from "./components/NonCoffeeMaker";
import Cashier from "./components/Cashier";
import CoffeeMakerD from "./components/CoffeeMakerD";

export default function AbstractA() {
  return (
    <div className={styles.wrapper}>
      <div>추상화</div>
      <h1>Coffe & Drink</h1>
      <CoffeeMaker />
      <CoffeeMakerD />
      <NonCoffeeMaker />
      <Cashier />
    </div>
  );
}
