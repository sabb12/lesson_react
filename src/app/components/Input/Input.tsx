import { useState } from "react";
import styles from "./Input.module.css";

type Props = {
  title: string;
  required?: boolean;
  placeHolder?: string;
  actionButton?: React.ReactNode;
  icon?: React.ReactNode;
};

export default function Input(props: Props) {
  const { title, required = false, placeHolder, actionButton, icon } = props;

  const [value, setValue] = useState("");
  console.log(value.length);
  return (
    <div className={styles.inputContainer}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>
        <div>
          {title}
          {required && <span>*</span>}
        </div>
        <input
          type="text"
          value={value}
          placeholder={placeHolder}
          maxLength={20}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className={styles.rightContainer}>
        <div>{value.length}/20</div>
        <button onClick={() => setValue("")}>x</button>
        {actionButton}
      </div>
    </div>
  );
}
