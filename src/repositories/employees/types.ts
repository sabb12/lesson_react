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

// Partial는 property를 optional 하게 만들어 준다
export type UpdateEmployeeParam = Partial<EmployeeResponse>;
