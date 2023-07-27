import { useState } from "react";
import Modal2 from "../Modal2";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import MobileAuthModal from "./MobileAuthModal";

export default function ModalSample() {
  const [open, setOpen] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certification, setCertification] = useState("");

  return (
    <div>
      <Button text={"Modal2 열기"} onClick={() => setOpen(true)} />
      {open && (
        <Modal2 onClose={() => setOpen(false)}>
          <div>Modal2</div>
        </Modal2>
      )}
      <Button
        text={"휴대폰번호 인증모달 열기"}
        onClick={() => setAuthModal(true)}
      />
      {authModal && <MobileAuthModal onClose={() => setAuthModal(false)} />}
    </div>
  );
}
