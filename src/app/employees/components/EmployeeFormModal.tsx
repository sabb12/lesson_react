import Input from "@/app/components/Input/Input";
import Modal2 from "@/app/components/Modal/Modal2";
import { useState } from "react";

// type EmployeeForm = Omit<EmployeeResponse, "id"> & { id: string };

type EmployeeForm = Partial<{
  id: string;
  name: string;
  position: string;
  department: string;
  team: string;
  joiningdate: string;
}>;

const DEFAULT_EMPLOYEE_FORM = {
  id: "",
  name: "",
  position: "",
  department: "",
  team: "",
  joiningdate: "",
};

type Props = {
  initialValue?: EmployeeForm;
  onClose: () => void;
  onSubmit: (employee: EmployeeForm) => void;
};

export function EmployeeFormModal(props: Props) {
  const { onClose, onSubmit, initialValue = DEFAULT_EMPLOYEE_FORM } = props;

  const [employeeForm, setEmployeeForm] = useState<EmployeeForm>(
    DEFAULT_EMPLOYEE_FORM
  );

  return (
    <Modal2 onClose={onClose}>
      <div>
        <Input
          value={employeeForm?.name}
          title={"이름"}
          onChange={(e) => {
            const newEmployee = { ...employeeForm, name: e.target.value };
            setEmployeeForm(newEmployee);
          }}
        ></Input>
        <Input
          value={String(employeeForm?.id)}
          title={"사번"}
          onChange={(e) => {
            const newEmployee = {
              ...employeeForm,
              id: e.target.value,
            };
            setEmployeeForm(newEmployee);
          }}
        ></Input>
        <Input
          value={employeeForm?.position}
          title={"직급"}
          onChange={(e) => {
            const newEmployee = {
              ...employeeForm,
              position: e.target.value,
            };
            setEmployeeForm(newEmployee);
          }}
        ></Input>
        <Input
          value={employeeForm?.department}
          title={"부서"}
          onChange={(e) => {
            const newEmployee = {
              ...employeeForm,
              department: e.target.value,
            };
            setEmployeeForm(newEmployee);
          }}
        ></Input>
        <Input
          value={employeeForm?.team}
          title={"팀"}
          onChange={(e) => {
            const newEmployee = { ...employeeForm, team: e.target.value };
            setEmployeeForm(newEmployee);
          }}
        ></Input>
        <Input
          value={employeeForm?.joiningdate}
          title={"입사일"}
          onChange={(e) => {
            const newEmployee = {
              ...employeeForm,
              joiningdate: e.target.value,
            };
            setEmployeeForm(newEmployee);
          }}
        ></Input>
      </div>
      <button
        onClick={function () {
          // 저장 클릭 시
          // 모달 close
          onSubmit(employeeForm);
          onClose();

          // 조회 해서 화면에 rendering
        }}
      >
        저장
      </button>
    </Modal2>
  );
}
