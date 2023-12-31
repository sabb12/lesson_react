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
    const isWorking = time >= 9 && time < 18;
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
    const isWorking = time >= 9 && time < 18;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log("D가 계산을 완료했습니다");
  },
};
