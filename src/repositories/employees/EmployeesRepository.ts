import { supabase } from "../index";

import {
  NewEmployeeParam,
  Employee,
  EmployeeResponse,
  UpdateEmployeeParam,
} from "@/repositories/employees/types";

// superbase 테이블 title 이름이다
const SCHEMA_NAME = "employees";

export const mapResponse = (item: EmployeeResponse): Employee => {
  return {
    ...item,
  };
};

// getList의 type은 Promise이고 resovle되는 type은 Employee[]다
export function getList(): Promise<Employee[]> {
  const query = supabase.from(SCHEMA_NAME).select();
  return new Promise(function (resolve) {
    query.returns<EmployeeResponse[]>().then(function ({ data }) {
      if (!data) {
        resolve([]);
        return;
      }

      resolve(data);
    });
  });
}

export function getById(id: number): Promise<Employee[]> {
  return new Promise(function (resolve) {
    const query = supabase
      .from(SCHEMA_NAME)
      .select()
      .eq("id", id)
      .returns<EmployeeResponse[]>();
    query.returns<EmployeeResponse[]>().then(function ({ data }) {
      if (!data) {
        resolve([]);
        return;
      }

      resolve(data);
    });
  });
}

export function create(buying: NewEmployeeParam): Promise<void> {
  return new Promise(function (resolve) {
    supabase
      .from(SCHEMA_NAME)
      .insert(buying)
      .throwOnError()
      .then(function () {
        resolve();
      });
  }).catch(function (error) {
    if (error.code === "23505") {
      throw Error("중복된 값이 있습니다");
    }

    throw error;
  });
}

export function update(buying: UpdateEmployeeParam): Promise<void> {
  return new Promise(function (resolve) {
    supabase
      .from(SCHEMA_NAME)
      .update(buying)
      .eq("id", buying.id)
      .throwOnError()
      .then(function () {
        resolve();
      });
  });
}

export function deleete(id: number): Promise<void> {
  return new Promise(function (resolve) {
    supabase
      .from(SCHEMA_NAME)
      .delete()
      .eq("id", id)
      .throwOnError()
      .then(function () {
        resolve();
      });
  });
}
