import styles from "./ButtonModal.module.css";
import React, { useState } from "react";

export default function ButtonModal() {
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
        <input className="dateofBirthInput" />
      </div>
      <div>
        <button className="cancelButton">취소</button>
        <button type="button" onClick={handleClick} className="savedButton">
          저장
        </button>
      </div>
      <h2>Message: {updateInputValue}</h2>
    </div>
  );
}
