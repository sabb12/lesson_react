import Modal2 from "@/app/components/Modal/Modal2";
import styles from "./SyncProgressModal.module.css";
import { useState } from "react";
import { supabase } from "@/repositories";

type Props = {
  imageFiles: File[];
  onClose: () => void;
};

export default function SyncProgressModal({ imageFiles, onClose }: Props) {
  const [uploadCount, setUploadCount] = useState(0);
  console.log(uploadCount);
  return (
    <Modal2 onClose={onClose} title="동기적으로 업로드하기">
      <div
        className={styles.uploadBar}
        style={{ width: `${(100 / imageFiles.length) * uploadCount}%` }}
      ></div>
      <div>
        {imageFiles.map(function (file, i) {
          return <div key={i}>{file.name}</div>;
        })}
      </div>
      <button
        onClick={function () {
          //   const promiseList = imageFiles.map(function (file) {
          //     const filename = `${file.name}-${Date.now()}`;
          //     return supabase.storage.from("products").upload(filename, file);
          //   });

          //   promiseList.forEach(function (promise, i) {
          //     promise.then(function (data) {
          //       console.log(`resolve reduce promise ${i}, ${data?.data?.path}`);
          //     });
          //   });

          const promiseList = imageFiles.map(function (file) {
            const filename = `${file.name}-${Date.now()}`;
            return supabase.storage.from("products").upload(filename, file);
          });
          promiseList.reduce(function (previousValue, currentValue, i) {
            return previousValue.then(function (data) {
              setUploadCount(i + 1);
              console.log(`resolve reduce promise ${i}, ${data?.data?.path}`);
              return currentValue;
            });
          }, Promise.resolve({ data: { path: "" }, error: null }));
        }}
      >
        업로드
      </button>
    </Modal2>
  );
}
