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
                  text="발급"
                  onClick={() => alert("인증번호가 발급 됬다")}
                  color="black" width="55px" fontSize="15px"/>
              }
            />
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
            color="black"
            width="70px"
            height="40px"
            border="1px solid black"
            buttonStyle="secondary"
            text={"취소"}
            onClick={() => setInputValue("")}
          />

          <Button
            color="black"
            width="70px"
            height="40px"
            background="white"
            border="1px solid black"
            buttonStyle="primary"
            text={"저장"}
            onClick={() => setInputValue("")}
          />
        </div>
      </div>
    </div>
  );
}
