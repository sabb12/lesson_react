"use client";

import { useEffect, useState } from "react";

export default function EmployeeListPage() {
  const [employeeList, setEmployeeList] = useState();
  useEffect(() => {
    fetch("/employee-list.csv")
      .then((response) => response.text())
      .then((data) => {
        const dataList = data.replaceAll("\r", "").split("\n");
        const dataKey = dataList[0].split(",");
        // const datayValue = dataList[1].split(",");
        const dataValues = dataList.slice(1);
        const employeeList = dataValues.map(function (data) {
          const dataValue = data.split(",");
          return {
            [dataKey[0]]: dataValue[0],
            [dataKey[1]]: dataValue[1],
            [dataKey[2]]: dataValue[2],
            [dataKey[3]]: dataValue[3],
            [dataKey[4]]: dataValue[4],
            [dataKey[5]]: dataValue[5],
          };
        });

        setEmployeeList(employeeList);
        console.log(employeeList);
        // map과 reduce를 활용 해서
        console.log(dataList[0].split(","));
        console.log(dataList[1].split(","));
        // console.log({
        //   [dataKey[0]]: datayValue[0],
        //   [dataKey[1]]: datayValue[1],
        //   [dataKey[2]]: datayValue[2],
        //   [dataKey[3]]: datayValue[3],
        //   [dataKey[4]]: datayValue[4],
        //   [dataKey[5]]: datayValue[5],
        // });
      });
  }, []);

  return (
    <div>
      {"Employee List"}
      {employeeList &&
        employeeList?.map((employee, i) => {
          return <div key={i}>{JSON.stringify(employee)}</div>;
        })}
    </div>
  );
}
