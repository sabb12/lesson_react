import dayjs from "dayjs";

export default function CoffeeMaker() {
  function handleClickCoffee(drink: string) {
    // 클릭 했을 때
    // 근무 시간 체크
    // 누가 뭘 제조 했는지

    const time = dayjs().get("hour");
    const isWorking = time >= 9 && time < 18;
    if (!isWorking) {
      console.log("A의 근무시간이 아닙니다");
      return;
    }

    console.log(`직원A가 ${drink}를 제조합니다`);
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
