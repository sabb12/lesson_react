import Modal2 from "@/app/components/Modal/Modal2";
import AsyncProgressChip from "./AsyncProgressChip";

type Props = {
  onClose: () => void;
  imageFiles: File[];
};

export default function AsyncProgressModal({ imageFiles, onClose }: Props) {
  return (
    <Modal2 onClose={onClose} title="비동기적으로 업로드하기">
      <div>
        {imageFiles.map(function (file, i) {
          return <AsyncProgressChip key={i} file={file} />;
        })}
      </div>
    </Modal2>
  );
}
