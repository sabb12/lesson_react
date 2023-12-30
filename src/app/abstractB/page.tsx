"use client";

import dayjs from "dayjs";
import styles from "./page.module.css";
import CoffeeMaker from "./components/CoffeeMaker";
import NonCoffeeMaker from "./components/NonCoffeeMaker";
import Cashier from "./components/Cashier";
import { employeeA, employeeB, employeeC, employeeD } from "./services";

export default function AbstractB() {
  return (
    <div className={styles.wrapper}>
      <div>추상화</div>
      <h1>Coffe & Drink</h1>
      <CoffeeMaker employee={employeeA} />
      <CoffeeMaker employee={employeeD} />
      <NonCoffeeMaker employee={employeeB} />
      <Cashier employee={employeeC} />
    </div>
  );
}
