import Modal2 from "@/app/components/Modal/Modal2";
import { useEffect, useState } from "react";
import styles from "./AsyncProgressModal.module.css";
import { supabase } from "@/repositories";

type Props = {
  file: File;
};

export default function AsyncProgressChip({ file }: Props) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const filename = `${file.name}-${Date.now()}`;
    supabase.storage
      .from("products")
      .upload(filename, file)
      .then(function () {
        setComplete(true);
      });
  }, []);

  return (
    <div className={styles.chipContainer}>
      {file.name}
      <div className={complete ? styles.done : styles.ready}>
        {complete ? "DONE" : "READY"}
      </div>
    </div>
  );
}

// complete가 true 면 초록색으로 변한다
// complete가 false면 빨간색으로 변한다
