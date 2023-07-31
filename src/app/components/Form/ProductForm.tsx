import { initialize } from "next/dist/server/lib/render-server";
import styles from "./ProductForm.module.css";
import { useState } from "react";
import { ChangeEvent } from "react";

export type ProductCateogry = "FOOD" | "COSMETIC" | "INTERIOR";

export type ProductFormValues = {
  id: string;
  name: string;
  price: number;
  category: ProductCateogry;
  description: string;
};

type Props = {
  initialValues: ProductFormValues;
  formType: "NEW" | "DETAIL";
  onSubmit: (formValues: ProductFormValues) => void;
};

export default function ProductForm(props: Props) {
  const { initialValues, onSubmit, formType } = props;
  // formValues값이 ProductFormValues의 타입이여 한다는 뜻
  // useState<ProductFormValues>(initialValues);
  // setFormValues = formvalues에 있는 객체의 id를 변경 해주고 싶은거다
  const [formValues, setFormValues] = useState(initialValues);

  // const categoryValue = "FOOD";
  // const categoryLabel = "음식";

  const categoryRadioGroup = [
    { categoryValue: "FOOD", categoryLabel: "음식" },
    { categoryValue: "COSMETIC", categoryLabel: "화장품" },
    { categoryValue: "INTERIOR", categoryLabel: "인테리어/가구" },
  ];
  console.log(formType, formValues, initialValues);
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <div className={styles.productIDContainer}>
            <label htmlFor="productID">상품아이디</label>
            <input
              type="text"
              id="productID"
              name="id"
              value={formValues.id}
              onChange={(event) =>
                setFormValues({ ...formValues, id: event.target.value })
              }
              readOnly={formType === "DETAIL"}
            />
          </div>
          <div className={styles.productNameContainer}>
            <label htmlFor="productName">상품명</label>
            <input
              type="text"
              id="productName"
              name="name"
              value={formValues.name}
              onChange={(event) =>
                setFormValues({ ...formValues, name: event.target.value })
              }
              readOnly={formType === "DETAIL"}
            />
          </div>
          <div className={styles.productPriceContainer}>
            <label htmlFor="productPrice">판매가격</label>
            <input
              type="text"
              id="productPrice"
              name="price"
              value={formValues.price}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  price: Number(event.target.value),
                })
              }
              readOnly={formType === "DETAIL"}
            />
          </div>
          <div className={styles.productCategoryContainer}>
            {/* <label htmlFor="categoryFOOD">음식</label>
            <input
              type="radio"
              name="category"
              id="categoryFOOD"
              value={"FOOD"}
              checked={formValues.category === "FOOD"}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  category: event.target.value as ProductCateogry,
                })
              }
            />
            <label htmlFor="categoryCOSMETIC">화장품</label>
            <input
              type="radio"
              name="category"
              id="categoryCOSMETIC"
              value={"COSMETIC"}
              checked={formValues.category === "COSMETIC"}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  category: event.target.value as ProductCateogry,
                })
              }
            /> */}
            {/* <label htmlFor="categoryINTERIOR">인테리어/가구</label>
            <input
              type="radio"
              name="category"
              id="categoryINTERIOR"
              value={"INTERIOR"}
              checked={formValues.category === "INTERIOR"}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  category: event.target.value as ProductCateogry,
                })
              }
            /> */}
            {categoryRadioGroup.map(({ categoryValue, categoryLabel }, i) => {
              console.log(categoryValue, categoryLabel);
              return (
                <div key={i}>
                  <label htmlFor={`category${categoryValue}`}>
                    {categoryLabel}
                  </label>
                  <input
                    type="radio"
                    name="category"
                    id={`category${categoryValue}`}
                    value={categoryValue}
                    checked={formValues.category === categoryValue}
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        category: event.target.value as ProductCateogry,
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.productDescriptionContainer}>
            <label htmlFor="productDescription">상세설명</label>
            <textarea name="content">{formValues.description}</textarea>
          </div>
        </div>
      </div>
      <div className={styles.formButtonsContainer}>
        <button onClick={() => onSubmit(formValues)}>등록</button>
        {/* <button onClick={onClear}>쉬소</button> */}
      </div>
    </div>
  );
}
