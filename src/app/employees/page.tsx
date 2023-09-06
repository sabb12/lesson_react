"use client";

import { useEffect, useState } from "react";

import * as EmployeeRepository from "@/repositories/employees/EmployeesRepository";
import { Employee } from "@/repositories/employees/types";

export default function EmployeeListPage() {
  // Employee type의 배열
  // employeeList의 type은 Employee type의 배열이다
  // employeeList.map(employee의 type은 Employee다(하나하나 이니깐) Employee은 객체다)
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);

  useEffect(() => {
    EmployeeRepository.getList().then(function (res) {
      setEmployeeList(res);
    });
  }, []);

  return (
    <div>
      {"Employee List"} <button>등록버튼</button>
      <table>
        <thead>
          <tr>
            <th>사번</th>
            <th>이름</th>
            <th>직급</th>
            <th>부서</th>
            <th>팀</th>
            <th>입사일</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* employeeList는 Employee[] type, */}
          {/* employee는 Employee type */}
          {employeeList.map((employee, i) => {
            return (
              <tr key={i}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.team}</td>
                <td>{employee.joiningdate}</td>
                <td>
                  <button>수정</button>
                </td>
                <td>
                  {/* promise랑 eventLoop랑 비동기 처리 */}
                  <button
                    onClick={function () {
                      EmployeeRepository.deleete(employee.id).then(function () {
                        EmployeeRepository.getList().then(function (data) {
                          setEmployeeList(data);
                        });
                      });
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
