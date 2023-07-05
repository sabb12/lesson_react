import styles from "./Button.module.css";

// parameter로 오는건 react에서 다 Props지만 이름은 만들어도 된다
type Props = {
  buttonStyle?: "primary" | "secondary" | "tertiary"; // 여기는 뭐가 있는지 명확하게 알려준다 왜냐면 여러 군대서 사용하기 때문에 모를수 있다. 이름도 명확히 사용해야된다
  text: string;
  description?: string;
  onClick: () => void;
};

console.log(styles.button);
// export default 다른 파일에서 사용할수 있는 상태
// `` back tik은 'a b' 클라스 이름을 중간에 space 뚸어 스기 하기 위해서 사용, class이름을 구분하기 위해서다
export default function Button(props: Props) {
  // buttonStyle? 가 undefine 일때 by default값으로 primary 주라
  const { buttonStyle = "primary", text, description, onClick } = props;
  return (
    <div className={styles.buttonContainer}>
      <button
        // [buttonStyle] 배열에 하는 이유
        // button style type 이 문자열이고 어떤 값이 들어 올지 몰라서 []한건다
        // styles['primary']
        // const result = {a: 1, b:2}
        // result.a / result['a']
        className={`${styles[buttonStyle]} ${styles.button}`}
        onClick={onClick}
      >
        {text}
      </button>
      {description ? (
        <div className={styles.description}>{description}</div>
      ) : (
        ""
      )}
    </div>
  );
}
