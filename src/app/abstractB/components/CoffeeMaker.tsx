import dayjs from "dayjs";
import { Employee } from "../services";

type Props = {
  employee: Employee;
};

export default function CoffeeMaker({ employee }: Props) {
  function handleClickCoffee(drink: string) {
    if (!employee.canWorking()) {
      console.log(`${employee.getName()}의 근무시간이 아닙니다`);
      return;
    }
    console.log(employee.doWokring(drink));
  }

  return (
    <div>
      <h3>커피메뉴 제조 (직원{employee.getName()})</h3>
      <div>
        <button
          onClick={function () {
            handleClickCoffee("아메리카노");
          }}
        >
          아메리카노
        </button>
        <button
          onClick={function () {
            handleClickCoffee("카페라떼");
          }}
        >
          카페라떼
        </button>
        <button
          onClick={function () {
            handleClickCoffee("바닐라라떼");
          }}
        >
          바닐라라떼
        </button>
      </div>
    </div>
  );
}
