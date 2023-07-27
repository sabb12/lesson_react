import { useState } from "react";
import styles from "./Modal.module.css";

type Props = {
  title?: string;
  content?: string;
};

export default function Modal(props: Props) {
  const { title, content } = props;

  const [close, setClose] = useState(false);

  return (
    <div>
      <button onClick={() => setClose(true)}>Modal 열기</button>
      {close && (
        <div className={styles.modal}>
          <div className={styles.modal_container}>
            <div className={styles.modal_header}>
              <div>{title}</div>
              <span
                className={styles.modal_close}
                onClick={() => setClose(false)}
              >
                &times;
              </span>
            </div>
            <div className={styles.modal_content}>{content}</div>
            <div className={styles.modal_footer}>
              <button>확인</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
