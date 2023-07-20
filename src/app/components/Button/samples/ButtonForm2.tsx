import Button from "../Button";
import { useState } from "react";
import styles from "./ButtonForm2.module.css";

export default function ButtonForm2() {
  return (
    <div className={`${styles.buttonModalContainer} ${styles.modalDisplay}`}>
      <div className={styles.inputContainer}>
        <div>인증이 완료되면 정보가 변경됩니다.인증을 요청하시겠어요?</div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          buttonStyle="primary"
          text={"인증요청"}
          onClick={() => alert("primary button clicked!!")}
        />
        <Button
          buttonStyle="tertiary"
          text={"취소"}
          onClick={() => alert("tertiary button clicked!!")}
        />
      </div>
    </div>
  );
}
