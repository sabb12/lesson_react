// 직원의 역할
// 1. 근무시간이 있다 => 근무시간인지 안니지 말해줄수 있다
// 2. 각자의 일이 있다

import dayjs from "dayjs";

interface Employee {
  canWorking: () => boolean;
  doWokring: (menu?: string) => void;
}

export const employeeA: Employee = {
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
  canWorking: function (): boolean {
    const time = dayjs().get("hour");
    const isWorking: boolean = time >= 12 && time < 16;
    return isWorking;
  },
  doWokring: function (drink?: string | undefined): void {
    console.log(`직원B가 ${drink}를 제조합니다`);
  },
};
