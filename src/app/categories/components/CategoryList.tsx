import { useState } from "react";
import styles from "./CategoryList.module.css";
import { Category } from "@/repositories/categories/types";

type Props = {
  onAdd: (name: string, parentId?: number) => void;
  onSelected: (category: Category) => void;
  onChange: (categoryName: string, category: Category) => void;
  onDelete: (category: Category) => void;
  depthList: Category[];
  depthSelected?: Category;
};

export default function CategoryList(props: Props) {
  const { onAdd, onSelected, onChange, onDelete, depthList, depthSelected } =
    props;
  const [depthInputValue, setDepthInputValue] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={depthInputValue}
          onChange={function (e) {
            setDepthInputValue(e.target.value);
          }}
        />
        <button
          onClick={function () {
            onAdd(depthInputValue, depthSelected?.parentId);
          }}
        >
          추가
        </button>
      </div>
      {depthList.map(function (category) {
        return (
          <div
            className={depthSelected?.id === category.id ? styles.active : ""}
            key={category.id}
            onClick={function () {
              onSelected(category);
            }}
          >
            {category.name}
            <button
              onClick={function (e) {
                e.stopPropagation();
                const categoryName = prompt("수정할 카테고리명을 입력해주세요");
                onChange(categoryName || "", category);
              }}
            >
              수정
            </button>
            <button
              onClick={function () {
                onDelete(category);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
