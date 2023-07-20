import Button from "../Button";
import { useState } from "react";
import styles from "./ButtonForm1.module.css";

export default function ButtonForm1() {
  const [inputValue, setInputValue] = useState("");
  const [updateInputValue, setupdateInputValue] = useState(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setupdateInputValue(inputValue);
  };

  return (
    <div className={styles.buttonModalContainer}>
      <div className={styles.inputContainer}>
        <input type="text" className="nameInput" onChange={handleChange} />
        <input type="text" className="dateofBirthInput" />
      </div>
      <div>
        <Button
          buttonStyle="secondary"
          text={"취소"}
          onClick={() => alert("primary button clicked!!")}
        />

        <Button
          buttonStyle="primary"
          text={"저장"}
          onClick={() => alert("primary button clicked!!")}
        />
      </div>
      <h2>Message: {updateInputValue}</h2>
    </div>
  );
}
