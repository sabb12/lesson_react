"use client";

import dayjs from "dayjs";
import styles from "./page.module.css";
import CoffeeMaker from "./components/CoffeeMaker";
import NonCoffeeMaker from "./components/NonCoffeeMaker";
import Cashier from "./components/Cashier";
import {
  employeeA,
  employeeB,
  employeeC,
  employeeD,
  employeeE,
  employeeF,
} from "./services";
import DrinkMaker from "./components/DrinkMaker";

export default function AbstractB() {
  return (
    <div className={styles.wrapper}>
      <div>추상화</div>
      <h1>Coffe & Drink</h1>
      <CoffeeMaker employee={employeeD} />
      <NonCoffeeMaker employee={employeeE} />
      <Cashier employee={employeeF} />
      <h1 style={{ color: "red" }}>Coffe & Drink 2</h1>
      <CoffeeMaker employee={employeeA} />
      <NonCoffeeMaker employee={employeeB} />
      <Cashier employee={employeeC} />
      <h1 style={{ color: "red" }}>Coffe & Drink 3</h1>
      <DrinkMaker
        employee={employeeA}
        drinkList={["아메리카노", "카페라떼", "바닐라라떼"]}
        title={"커피메뉴 제조"}
      />
      <NonCoffeeMaker employee={employeeB} />
      <Cashier employee={employeeC} />
    </div>
  );
}
