import ModalSample from "./ModalSample";
import { useState } from "react";
import Modal2 from "../Modal2";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

type Props = {
  onClose: () => void;
};

export default function MobileAuthModal({ onClose }: Props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certification, setCertification] = useState("");

  return (
    <Modal2 onClose={onClose} title="휴대번호 인증">
      <div>
        <div>
          <Input
            title="휴대폰번호"
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
            title="인증번호"
            value={certification}
            onChange={(event) => {
              setCertification(event.target.value);
            }}
            onClear={() => {
              setCertification("");
            }}
          />
        </div>
        <div>
          <Button text="취소" />
          <Button text="완료" />
        </div>
      </div>
    </Modal2>
  );
}
