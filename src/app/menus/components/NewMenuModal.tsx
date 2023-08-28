import { useState } from "react";
import Modal2 from "@/app/components/Modal/Modal2";

type newMenu = {
  name: string;
  price: number;
  category: string;
  imageURL: string;
};

type Props = {
  onClose: () => void;
  onAdd: (menu: newMenu) => void;
};

export default function NewMenuModal({ onClose, onAdd }: Props) {
  const [inputValues, setInputValues] = useState({
    name: "",
    price: 0,
    category: "",
    imageURL: "",
  });

  return (
    <Modal2 onClose={onClose}>
      <div>
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files || e.target.files.length <= 0) return;
            console.log(URL.createObjectURL(e.target.files[0]));
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
      <button onClick={() => onAdd(inputValues)}>Submit</button>
    </Modal2>
  );
}

// 새로운 객체를 만든다
// inputValue.name: e.target.value
// const newName = {...inputValues, name: e.target.value}
// setInputValues(newName)
