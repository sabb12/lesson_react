import dayjs from "dayjs";

export default function NonCoffeeMaker() {
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
    <div>
      <h3>논커피메뉴 제조 (직원B)</h3>
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
