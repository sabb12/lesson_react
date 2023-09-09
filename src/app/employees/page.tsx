"use client";

import { useEffect, useState } from "react";
import Modal2 from "../components/Modal/Modal2";
import Input from "../components/Input/Input";

import * as EmployeeRepository from "@/repositories/employees/EmployeesRepository";
import {
  Employee,
  EmployeeResponse,
  NewEmployeeParam,
} from "@/repositories/employees/types";
import { EmployeeFormModal } from "./components/EmployeeFormModal";

export default function EmployeeListPage() {
  // Employee type의 배열
  // employeeList의 type은 Employee type의 배열이다
  // employeeList.map(employee의 type은 Employee다(하나하나 이니깐) Employee은 객체다)
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    EmployeeRepository.getList().then(function (res) {
      setEmployeeList(res);
    });
  }, []);

  return (
    <div>
      {"Employee List"}{" "}
      <button
        onClick={function () {
          // 등록버튼 클릭 시 Modal 오픈
          setShowModal(true);
        }}
      >
        등록버튼
      </button>
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
            console.log("update", employee);
            return (
              <tr key={i}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.team}</td>
                <td>{employee.joiningdate}</td>
                <td>
                  <button
                    onClick={function () {
                      // 수정 클릭 시 Modal 오픈
                      setShowModal(true);
                      // 해당 employee 내용이 employeeForm에입력 되있어야된다
                      setSelectedEmployee(employee);
                    }}
                  >
                    수정
                  </button>
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
      {showModal && (
        <EmployeeFormModal
          onClose={function () {
            setShowModal(false);
          }}
          onSubmit={function (employeeForm) {
            setShowModal(false);
            // 입력된 내용을 저장하는 API를 호출
            if (!employeeForm) return;
            const createForm = {
              id: Number(employeeForm.id),
              name: employeeForm?.name || "",
              department: employeeForm?.department || "",
              team: employeeForm?.team || "",
              joiningdate: employeeForm?.joiningdate || "",
              position: employeeForm?.position || "",
            };
            EmployeeRepository.create(createForm).then(function () {
              // resolve가 호출 될 때 .then 함수에 넘겨준 callback이 실행 된다
              EmployeeRepository.getList().then(function (data) {
                setEmployeeList(data);
              });
            });
          }}
        />
      )}
      {showUpdateModal && (
        <EmployeeFormModal
          initialValue={{
            ...selectedEmployee,
            id: String(selectedEmployee?.id || ""),
          }}
          onClose={function () {
            setShowModal(false);
          }}
          onSubmit={function (employeeForm) {
            const updateForm = {
              ...employeeForm,
              id: Number(employeeForm.id),
            };
            EmployeeRepository.update(updateForm).then(function () {
              EmployeeRepository.getList().then(function (data) {
                setEmployeeList(data);
                setShowModal(false);
              });
            });
          }}
        />
      )}
    </div>
  );
}

// 수정 클릭 시 Modal 오픈
//  setShowModal(true);
// 해당 employee 내용이 employeeForm에입력 되있어야된다

// 새로운 내용 입력 후 저장을 누르면 update되야 한다
// EmployeeRepository.update().then() ....
// 동시에 Modal도 close 한다
// setShowModal(false)
