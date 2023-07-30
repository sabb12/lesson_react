import { useState } from "react";
import Modal2 from "../Modal2";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import MobileAuthModal from "./MobileAuthModal";

export default function ModalSample3() {
  const [authModal, setAuthModal] = useState(false);

  return (
    <div>
      <Button
        text={"휴대폰번호 인증모달 열기"}
        onClick={() => setAuthModal(true)}
      />
      {authModal && (
        <MobileAuthModal
          onClose={() => {
            setAuthModal(false);
          }}
        />
      )}
    </div>
  );
}