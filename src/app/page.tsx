"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import ButtonForm1 from "./components/Button/samples/ButtonForm1";
import ButtonForm2 from "./components/Button/samples/ButtonForm2";
import InputSample1 from "./components/Input/sample/InputSample1";
import ModalForm from "./components/Modal/sample/ModalForm";
import ModalSample from "./components/Modal/sample/ModalSample";
import FormSample1 from "./components/Form/sameple/FormSample1";

export default function Home() {
  return (
    <div>
      <h1>Button</h1>
      <div className={styles.buttonContainer}>
        <Button
          buttonStyle="primary"
          onClick={() => alert("primary button clicked!!")}
        >Primary Button</Button>
        <Button
          buttonStyle="secondary"
          onClick={() => alert("secondary button clicked!!")}
        >Secondary Button</Button>
        <Button
          buttonStyle="tertiary"
          onClick={() => alert("tertiary button clicked!!")}
        >tertiary Button</Button>
      </div>
      <div>
        <ButtonForm1 />
        <ButtonForm2 />
      </div>
      <div>
        <h3>Input</h3>
        <InputSample1 />
      </div>
      <div>
        <ModalForm />
      </div>
      <div>
        <ModalSample />
      </div>
      <div>
        <FormSample1 />
      </div>
    </div>
  );
}
