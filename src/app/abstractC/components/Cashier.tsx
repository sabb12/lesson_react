import dayjs from "dayjs";
import { Employee, employeeC } from "../services";

type Props = {
  employee: Employee;
};

export default function Cashier({ employee }: Props) {
  function handleClickCoffee() {
    if (!employee.canWorking()) {
      console.log("C의 근무시간이 아닙니다");
      return;
    }
    employee.doWokring();
  }

  return (
    <div>
      <h3>계산하는곳 제조 (직원C)</h3>
      <div>
        <button
          onClick={function () {
            handleClickCoffee();
          }}
        >
          계산하기
        </button>
      </div>
    </div>
  );
}
