import { useState } from "react";
import Modal2 from "@/app/components/Modal/Modal2";

type Props = {
  onClose: () => void;
};

export default function NewMenuModal({ onClose }: Props) {
  const [inputValues, setInputValues] = useState({
    name: "",
    price: 0,
    category: "",
  });

  return (
    <Modal2 onClose={onClose}>
      <div>
        <input type="file" />
        <img src="" alt="" />
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
          onChange={(e) => e.target.value}
        />
        <input
          type="text"
          value={inputValues.category}
          onChange={(e) => e.target.value}
        />
      </div>
      <button>Submit</button>
    </Modal2>
  );
}

// 새로운 객체를 만든다
// inputValue.name: e.target.value
// const newName = {...inputValues, name: e.target.value}
// setInputValues(newName)
