// 조회 할 때 사용 하는 type
export type EmployeeResponse = {
  id: number;
  name: string;
  position: string;
  department: string;
  team: string;
  joiningdate: string;
};

export type Employee = EmployeeResponse;

export type NewEmployeeParam = EmployeeResponse;

export type UpdateEmployeeParam = Partial<EmployeeResponse>;
