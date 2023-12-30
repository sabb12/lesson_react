import dayjs from "dayjs";
import { Employee } from "../services";

type Props = {
  employee: Employee;
};

export default function NonCoffeeMaker({ employee }: Props) {
  function handleClickNoneCoffee(drink: string) {
    if (!employee.canWorking()) {
      console.log(`${employee.getName()}의 근무시간이 아닙니다`);
      return;
    }

    console.log(employee.doWokring(drink));
  }
  return (
    <div>
      <h3>논커피메뉴 제조 (직원{employee.getName()})</h3>
      <div>
        <button
          onClick={function () {
            handleClickNoneCoffee("아이스티");
          }}
        >
          아이스티
        </button>
        <button
          onClick={function () {
            handleClickNoneCoffee("녹차");
          }}
        >
          녹차
        </button>
        <button
          onClick={function () {
            handleClickNoneCoffee("얼그레이");
          }}
        >
          얼그레이
        </button>
      </div>
    </div>
  );
}
