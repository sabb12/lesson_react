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
      <Button onClick={() => setOpen(true)} >Modal2 열기</Button>
      {open && (
        <Modal2 onClose={() => setOpen(false)}>
          <div>Modal2</div>
        </Modal2>
      )}
      <Button onClick={() => setAuthModal(true)}>휴대폰번호 인증모달 열기</Button>
      {authModal && <MobileAuthModal onClose={() => setAuthModal(false)} />}
    </div>
  );
}
