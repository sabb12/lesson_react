import dayjs from "dayjs";

export default function Cashier() {
  function handleClickCoffee() {
    const time = dayjs().get("hour");
    const isWorking = time >= 9 && time < 18;
    if (!isWorking) {
      console.log("C가 계산을 완료했습니다");
    } else {
      console.log("C의 근무시간이 아닙니다");
    }
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
