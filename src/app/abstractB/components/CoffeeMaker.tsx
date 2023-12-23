import dayjs from "dayjs";
import { employeeA } from "../services";

export default function CoffeeMaker() {
  function handleClickCoffee(drink: string) {
    if (!employeeA.canWorking()) {
      console.log("A의 근무시간이 아닙니다");
      return;
    }

    employeeA.doWokring(drink);
  }

  return (
    <div>
      <h3>커피메뉴 제조 (직원A)</h3>
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
