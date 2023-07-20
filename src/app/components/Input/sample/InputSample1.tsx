import Input from "../Input";
import Button from "../../Button/Button";

export default function InputSample1() {
  //   const [userForm, setUserForm] = usesState({
  //     name: "",
  //     age: 0,
  //     gender: "F",
  //   });

  //   const handleSubmit = () => {
  //     fetch({params: userFrom}).then(...)
  //   }

  return (
    <div>
      <Input
        //   value={userForm.name}
        //   onChange={(event) => setUserForm({...userForm, name: event.target.name})}
        title={"이름"}
        required={true}
        placeHolder={"이름을 입력 하세요"}
        icon={"V"}
        actionButton={<Button text={"Action"} />}
      />
    </div>
  );
}
