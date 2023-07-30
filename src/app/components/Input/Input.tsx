import { useState } from "react";
import styles from "./Input.module.css";
import { ChangeEvent } from "react";

// 많이 사용하는 공통 component는 useSate를 가능한 사용 안하거나 적게 사용하는게 좋다

type Props = {
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void; //입력한 내용을 비게해주는 함수 => void return 없으면 void
  title?: string;
  required?: boolean;
  placeHolder?: string;
  actionButton?: React.ReactNode; //type string도 되고 jsx도 되고 숫자도 되고 다 된다
  icon?: React.ReactNode;
};

export default function Input(props: Props) {
  const {
    title,
    required = false,
    placeHolder,
    actionButton,
    icon,
    value,
    onChange,
    onClear,
  } = props;

  // const [value, setValue] = useState("");

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
          onChange={(event) => onChange(event)}
        />
      </div>
      <div className={styles.rightContainer}>
        <div>{value?.length || 0}/20</div>
        <button onClick={onClear}>x</button>
        {actionButton}
      </div>
    </div>
  );
}
