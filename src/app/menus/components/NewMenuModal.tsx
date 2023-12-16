import { useState } from "react";
import Modal2 from "@/app/components/Modal/Modal2";

// 정의 한거 뿐이다, 객체가 만들어 진게 아니다
// const menu: NewMenu = {name: "12", price} 이렇게 되야 객체가 생성 된다.
type NewMenu = {
  id?: number;
  name: string;
  price: number;
  category: string;
  imageURL: string;
};

type Props = {
  onClose: () => void;
  onAdd: (menu: NewMenu) => void;
  initialValue: NewMenu;
};

export default function NewMenuModal({ onClose, onAdd, initialValue }: Props) {
  const [inputValues, setInputValues] = useState(initialValue);
  console.log("initialValue", initialValue);
  return (
    <Modal2 onClose={onClose}>
      <div>
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files || e.target.files.length <= 0) return;
            console.log(
              "URL.createObjectURL(e.target.files[0]) :",
              URL.createObjectURL(e.target.files[0])
            );
            const newInputValues = {
              ...inputValues,
              imageURL: URL.createObjectURL(e.target.files[0]),
            };
            setInputValues(newInputValues);
          }}
        />
        <img
          src={inputValues.imageURL}
          alt="새로운 메뉴 이미지 입니다"
          width={100}
        />
        <input
          type="text"
          value={inputValues.name}
          onChange={(e) => {
            const newInputValues = { ...inputValues, name: e.target.value };
            setInputValues(newInputValues);
          }}
        />
        <input
          type="text"
          value={inputValues.price}
          onChange={(e) => {
            const newInputValues = {
              ...inputValues,
              price: Number(e.target.value),
            };
            setInputValues(newInputValues);
          }}
        />
        <input
          type="text"
          value={inputValues.category}
          onChange={(e) => {
            const newInputValues = { ...inputValues, category: e.target.value };
            setInputValues(newInputValues);
          }}
        />
      </div>
      <button
        onClick={function () {
          console.log("inputValues :", inputValues);
          onAdd(inputValues);
        }}
      >
        Submit
      </button>
    </Modal2>
  );
}

// 새로운 객체를 만든다
// inputValue.name: e.target.value
// const newName = {...inputValues, name: e.target.value}
// setInputValues(newName)
