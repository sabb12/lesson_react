"use client";

import dayjs from "dayjs";
import styles from "./page.module.css";
import CoffeeMaker from "./components/CoffeeMaker";
import NonCoffeeMaker from "./components/NonCoffeeMaker";
import Cashier from "./components/Cashier";

export default function AbstractA() {
  function handleClickNoneCoffee(drink: string) {
    const time = dayjs().get("hour");
    const isWorking: boolean = time >= 12 && time < 16;
    if (!isWorking) {
      console.log("B의 근무시간이 아닙니다");
      return;
    }

    console.log(`직원B가 ${drink}를 제조합니다`);
  }

  return (
    <div className={styles.wrapper}>
      <div>추상화</div>
      <h1>Coffe & Drink</h1>
      <CoffeeMaker />
      <NonCoffeeMaker />
      <Cashier />
    </div>
  );
}
