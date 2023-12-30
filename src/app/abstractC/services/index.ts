// 직원의 역할
// 1. 근무시간이 있다 => 근무시간인지 안니지 말해줄수 있다
// 2. 각자의 일이 있다

import dayjs from "dayjs";

export interface Employee {
  canWorking: () => boolean;
  doWokring: (menu?: string) => void;
  getName: () => string;
}

export const employeeA: Employee = {
  getName: function () {
    return "직원 A";
  },

  canWorking: function (): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 9 && time < 18;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log(`직원A가 ${drink}를 제조합니다`);
  },
};

export const employeeB: Employee = {
  getName: function () {
    return "직원 B";
  },
  canWorking: function (): boolean {
    const time = dayjs().get("hour");
    const isWorking: boolean = time >= 12 && time < 16;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log(`직원B가 ${drink}를 제조합니다`);
  },
};

export const employeeC: Employee = {
  getName: function () {
    return "직원 C";
  },
  canWorking: function (): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 15 && time < 17;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log("C가 계산을 완료했습니다");
  },
};

export const employeeD: Employee = {
  getName: function () {
    return "직원 D";
  },
  canWorking: function (): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 10 && time < 19;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log(`직원D가 ${drink}를 제조합니다`);
  },
};

export const employeeE: Employee = {
  getName: function () {
    return "직원 E";
  },
  canWorking: function (): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 11 && time < 20;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log(`직원E가 ${drink}를 제조합니다`);
  },
};

export const employeeF: Employee = {
  getName: function () {
    return "직원 F";
  },
  canWorking: function (): boolean {
    const time = dayjs().get("hour");
    const isWorking = time >= 10 && time < 20;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log("F가 계산을 완료했습니다");
  },
};

const 배열 = [1, 2, , 342, 34, 345, 3];

function A() {
  return <div></div>;
}
// tsx 는 타입을 정의 해주는
// 빌드 할 때 tsx를 tsx => jsx로 변환하고 다시 js파일 변화 해준다 자바스크립트로 변환 해준다
// jsx element 브라우저에서 jsx인식 못 한다.
