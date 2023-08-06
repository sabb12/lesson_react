import Button from "../Button";
import Input from "../../Input/Input";
import { useState } from "react";
import styles from "./ButtonForm1.module.css";

export default function ButtonForm1() {
  const [inputValue, setInputValue] = useState("");
  const [updateInputValue, setupdateInputValue] = useState(inputValue);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [certification, setCertification] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setupdateInputValue(inputValue);
  };

  return (
    <div className={styles.buttonModalContainer}>
      <div className={styles.wrapper}>
        <div className={styles.inputContainer}>
          <Input
            title="이름"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            onClear={() => {
              setPhoneNumber("");
            }}
            actionButton={
              <Button
                // text="발급"
                onClick={() => alert("인증번호가 발급 됬다")}
                // color="black"
                // width="55px"
                // fontSize="15px"
              >
                발급
              </Button>
            }
          />
          3
          <Input
            title="번호"
            value={certification}
            onChange={(event) => {
              setCertification(event.target.value);
            }}
            onClear={() => {
              setCertification("");
            }}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            buttonStyle="secondary"
            onClick={() => setInputValue("")}
          >취소</Button>

          <Button
            buttonStyle="primary"
            onClick={() => setInputValue("")}
          >저장</Button>
        </div>
      </div>
    </div>
  );
}
