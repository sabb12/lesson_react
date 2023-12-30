import { employeeA } from "@/app/abstractB/services";
import dayjs from "dayjs";

export default function CoffeeMakerD() {
  function handleClickCoffee(drink: string) {
    const time = dayjs().get("hour");
    const isWorking = time >= 9 && time < 18;
    if (!isWorking) {
      console.log("D의 근무시간이 아닙니다");
      return;
    }
    console.log(`직원D가 ${drink}를 제조합니다`);
  }

  return (
    <div>
      <h3>커피메뉴 제조 (직원D)</h3>
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
