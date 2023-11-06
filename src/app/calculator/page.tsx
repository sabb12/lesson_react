"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [formula, setFormula] = useState<
    { value: string; isMinus?: boolean }[]
  >([]);
  console.log("formula :", formula);

  const handleClickOperator = function (operator: "x" | "-" | "+" | "/" | "%") {
    const newFormula = [...formula];
    // newFormula.push({ value: "/" });
    // 연산자를 클릭 했을 때 앞에 숫자가 있으면 연산자를 추가 해준다.
    // 연산자를 클릭 했을 때 앞에 연자자 이면 클릭한 연산자로 대체 된다.
    const lastIndex = newFormula.length - 1;
    const lastValue = newFormula[lastIndex];

    if (Number(lastValue.value)) {
      newFormula.push({ value: operator });
    } else {
      lastValue.value = operator;
    }
    setFormula(newFormula);
  };

  const handleClickNumber = function (number: string) {
    const newformula = [...formula];
    // 마지막 요소의 인덱스 = newFormula.length - 1
    const lastIndex = newformula.length - 1;
    const lastValue = newformula[lastIndex];
    if (
      formula.length === 0 ||
      ["+", "-", "/", "x", "%"].includes(lastValue.value)
    ) {
      newformula.push({ value: number });
    } else {
      newformula[lastIndex].value = newformula[lastIndex].value + number;
    }
    setFormula(newformula);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.resultContainer}>
          {formula
            .map((element, i) => {
              return element.value;
            })
            .join("")}
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={function (e) {}}>C</button>
          <button
            onClick={function (e) {
              // +/- 클릭 했을 때
              // A에 값을 true로 저장한다
              // 다시 A를 틀릭 했을 때 false로 저장한다
              // A ?  "(-" + formulata : "" + formulata
              // formula = "10" 일을때;
              // +/- 클릭했을때 =>  formula = "(-10"
              // +/- 클릭했을때 =>  formula = "10"
            }}
          >
            +/-
          </button>
          <button
            onClick={function (e) {
              handleClickOperator("%");
            }}
          >
            %
          </button>
          <button
            onClick={function (e) {
              handleClickOperator("/");
            }}
          >
            /
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("7");
            }}
          >
            7
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("8");
            }}
          >
            8
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("9");
            }}
          >
            9
          </button>
          <button
            onClick={function (e) {
              handleClickOperator("x");
            }}
          >
            x
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("4");
            }}
          >
            4
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("5");
            }}
          >
            5
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("6");
            }}
          >
            6
          </button>
          <button
            onClick={function (e) {
              handleClickOperator("-");
            }}
          >
            -
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("1");
            }}
          >
            1
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("2");
            }}
          >
            2
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("3");
            }}
          >
            3
          </button>
          <button
            onClick={function (e) {
              handleClickOperator("+");
            }}
          >
            +
          </button>
          <button
            onClick={function (e) {
              handleClickNumber("0");
            }}
          >
            0
          </button>
          <button onClick={function (e) {}}>.</button>
          <button
            onClick={function (e) {
              // 마지막이 연산자면 error return
              // 숫자만 있을 경우 return
              // 마지막이 숫자인지 확인
              // 숫자이면 계산 해주고
              // 아니면 error return
              const newformula = [...formula];
              const lastIndex = newformula.length - 1;
              const lastValue = newformula[lastIndex];
              // early return
              if (["+", "-", "/", "x", "%"].includes(lastValue.value)) return;
              if (newformula.length === 1) return;
              if (Number(lastValue.value)) {
                // 계산
                // let result;
                // 배열을 돌면서 숫자인지 연산자 인지 확인 한다
                // 숫자인경우 && 앞에 연산자가 없을 경우
                // result = Number(lastValue.value)
                // 숫자이면서 && 앞에 연산자가 있는 경우
                // N (연산자) M
                // const N = result
                // const 연산자문자열 = 배열[자신의 index - 1]
                // const M = 배열[내 index]
                //(연산자문자열 === "x") result = result x M

                const result = newformula.reduce(function (acc, cur, i) {
                  if (Number(cur.value) && i === 0) {
                    return Number(cur.value);
                  }
                  if (
                    Number(cur.value) &&
                    ["+", "-", "/", "x", "%"].includes(newformula[i - 1].value)
                  ) {
                    const n = acc;
                    const operator = newformula[i - 1].value;
                    const m = Number(cur.value);
                    if (operator === "x") return n * m;
                    if (operator === "/") return n / m;
                    if (operator === "+") return n + m;
                    if (operator === "-") return n - m;
                    if (operator === "%") return n % m;
                  }
                  return acc;
                }, 0);
                console.log(result);
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

// 기능
// 2를 클릭 하면 resultContainer에 2가 표시된다
// 또 1를 클릭 했을 때 resultContainer에 21로 표시된다
// 연산자를 연속으로 클릭 하면 마지막 클릭 한게 화면에 표시된다
// 연산자가 숫자 사이에 있고 =를 클릭 하면 합한 숫자가 화면에 표시된다
// =를 클릭 전에 이전에 클릭한 내용들을 어딘가에 저장을 한다
