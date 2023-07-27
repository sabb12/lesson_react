import { PropsWithChildren } from "react";
import styles from "./Modal2.module.css";

type Props = PropsWithChildren<{
  onClose: () => void;
  title?: string;
}>;

// type Props = {
//   onClose: () => void;
//   children: ReactNode;
// };
// jsx HTMLELement return 하는 함수, component라고도 한다
export default function Modal2({ onClose, title, children }: Props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>
          <div>{title}</div>
          <span className={styles.modal_close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
}
