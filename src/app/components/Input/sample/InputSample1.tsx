import { useState } from "react";
import Input from "../Input";
import Button from "../../Button/Button";

export default function InputSample1() {
  const [userForm, setUserForm] = useState("");

  return (
    <div>
      <Input
        value={userForm}
        onChange={(event) => setUserForm(event.target.value)}
        onClear={() => setUserForm("")}
        title={"이름"}
        required={true}
        placeHolder={"이름을 입력 하세요"}
        icon={"V"}
        actionButton={<Button text={"Action"} color="black" width="55px" fontSize="15px"/>}
      />
    </div>
  );
}
