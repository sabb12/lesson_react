"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";

export default function Home() {
  return (
    <div>
      <h1>Button</h1>
      <div>
        <Button
          buttonStyle="primary"
          text={"Primary Button"}
          onClick={() => alert("primary button clicked!!")}
        />
        <Button
          buttonStyle="secondary"
          text={"Secondary Button"}
          onClick={() => alert("primary button clicked!!")}
        />
        <Button
          buttonStyle="tertiary"
          text={"Secondary Button"}
          onClick={() => alert("primary button clicked!!")}
        />
      </div>
    </div>
  );
}
