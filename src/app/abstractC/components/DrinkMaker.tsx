import { Employee } from "../services";

type Props = {
  drinkList: string[];
  employee: Employee;
  title: string;
};

export default function DrinkMaker({ drinkList, employee, title }: Props) {
  function handleClickCoffee(drink: string) {
    if (!employee.canWorking()) {
      console.log(`${employee.getName()}의 근무시간이 아닙니다`);
      return;
    }
    console.log(employee.doWokring(drink));
  }
  return (
    <div>
      <h3>
        {title}(직원{employee.getName()})
      </h3>
      <div>
        {drinkList.map(function (drink, i) {
          return (
            <button
              key={i}
              onClick={function () {
                handleClickCoffee(drink);
              }}
            >
              {drink}
            </button>
          );
        })}
      </div>
    </div>
  );
}
