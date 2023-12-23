"use client";

import dayjs from "dayjs";
import styles from "./page.module.css";

export default function Abstract2() {
  function handleCoffeeClick(employee: string, drink: string) {
    console.log(`직원${employee}가 ${drink}를 제조합니다`);
  }

  // canWorking(name:string): boolean = interface 이다 또는 시그니쳐
  function canBWorking(): boolean {
    // dayjs().get("hour") 현제 기준
    const time = dayjs().get("hour");
    const isWorking: boolean = time >= 12 && time < 16;

    return isWorking;
    // B는 12에서 6시 까지 일함
    // 현제시간이 = 12면 일하는 시간이다
    // 현제시간이 = 13면 일하는 시간이다
    // 현제시간이 = 14면 일하는 시간이다
    // 현제시간이 = 15면 일하는 시간이다
    // 현제시간이 = 16면 일하는 시간이 아니다.

    // 현제시간이 = n면 일하는 시간이다 = n = 12, 13, 14, 15
    // 현제시간이 = m면 일하는 시간이 아니다 = m = 1,2,3 ... 11, 16, 17 ...
  }

  function canACWorking(): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 9 && time < 18;

    return isWorking;
  }

  function canDWorking(): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 10 && time < 19;

    return isWorking;
  }

  function canEWorking(): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 11 && time < 20;

    return isWorking;
  }

  function canFWorking(): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 10 && time < 20;

    return isWorking;
  }

  return (
    <div className={styles.wrapper}>
      <div>추상화</div>
      <h1>Coffe & Drink</h1>
      <h3>커피메뉴 제조 (직원A)</h3>
      <div className={styles.buttonList}>
        <button
          onClick={function () {
            if (canACWorking()) {
              handleCoffeeClick("A", "아메리카노");
            } else {
              console.log("A의 근무시간이 아닙니다");
            }
          }}
        >
          아메리카노
        </button>
        <button
          onClick={function () {
            if (canACWorking()) {
              handleCoffeeClick("A", "카페라떼");
            } else {
              console.log("A의 근무시간이 아닙니다");
            }
          }}
        >
          카페라떼
        </button>
        <button
          onClick={function () {
            if (canACWorking()) {
              handleCoffeeClick("A", "바닐라라떼");
            } else {
              console.log("A의 근무시간이 아닙니다");
            }
          }}
        >
          바닐라라떼
        </button>
      </div>
      <h3>논커피메뉴 제조 (직원B)</h3>
      <div className={styles.buttonList}>
        <button
          onClick={function () {
            if (canBWorking()) {
              handleCoffeeClick("B", "아이스티");
            } else {
              console.log("B의 근무시간이 아닙니다");
            }
          }}
        >
          아이스티
        </button>
        <button
          onClick={function () {
            if (canBWorking()) {
              handleCoffeeClick("B", "녹차");
            } else {
              console.log("B의 근무시간이 아닙니다");
            }
          }}
        >
          녹차
        </button>
        <button
          onClick={function () {
            if (canBWorking()) {
              handleCoffeeClick("B", "얼그레이");
            } else {
              console.log("B의 근무시간이 아닙니다");
            }
          }}
        >
          얼그레이
        </button>
      </div>
      <h3>계산하는곳 제조 (직원C)</h3>
      <div className={styles.buttonList}>
        <button
          onClick={function () {
            if (canACWorking()) {
              console.log("C가 계산을 완료했습니다");
            } else {
              console.log("C의 근무시간이 아닙니다");
            }
          }}
        >
          계산하기
        </button>
      </div>

      <h1>Coffe & Drink 2</h1>
      <h3>커피메뉴 제조 (직원D)</h3>
      <div className={styles.buttonList}>
        <button
          onClick={function () {
            if (canDWorking()) {
              handleCoffeeClick("D", "아메리카노");
            } else {
              console.log("D의 근무시간이 아닙니다");
            }
          }}
        >
          아메리카노
        </button>
        <button
          onClick={function () {
            if (canDWorking()) {
              handleCoffeeClick("D", "카페라떼");
            } else {
              console.log("D의 근무시간이 아닙니다");
            }
          }}
        >
          카페라떼
        </button>
        <button
          onClick={function () {
            if (canDWorking()) {
              handleCoffeeClick("D", "바닐라라떼");
            } else {
              console.log("D의 근무시간이 아닙니다");
            }
          }}
        >
          바닐라라떼
        </button>
      </div>
      <h3>논커피메뉴 제조 (직원E)</h3>
      <div className={styles.buttonList}>
        <button
          onClick={function () {
            if (canEWorking()) {
              handleCoffeeClick("E", "아이스티");
            } else {
              console.log("E의 근무시간이 아닙니다");
            }
          }}
        >
          아이스티
        </button>
        <button
          onClick={function () {
            if (canEWorking()) {
              handleCoffeeClick("E", "녹차");
            } else {
              console.log("E의 근무시간이 아닙니다");
            }
          }}
        >
          녹차
        </button>
        <button
          onClick={function () {
            if (canEWorking()) {
              handleCoffeeClick("E", "얼그레이");
            } else {
              console.log("E의 근무시간이 아닙니다");
            }
          }}
        >
          얼그레이
        </button>
      </div>
      <h3>계산하는곳 제조 (직원F)</h3>
      <div className={styles.buttonList}>
        <button
          onClick={function () {
            if (canFWorking()) {
              console.log("F가 계산을 완료했습니다");
            } else {
              console.log("F의 근무시간이 아닙니다");
            }
          }}
        >
          계산하기
        </button>
      </div>
    </div>
  );
}
