import ProductForm, { ProductCateogry } from "../ProductForm";
import Button from "../../Button/Button";
import { useState } from "react";
import styles from "./FormSample1.module.css";
import { ProductFormValues } from "../ProductForm";

const DEFAULT_PRODUCT = {
  id: "",
  name: "",
  price: 0,
  category: "FOOD" as ProductCateogry,
  description: "",
};

export default function FormSample1() {
  //   const initialState = {
  //     id: 0,
  //     name: "",
  //     price: "",
  //     content: "",
  //   };

  const [productForm, setProductForm] = useState<ProductFormValues>();

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   // const name = event.target.name;
  //   // const value = event.target.value;

  //   setInformation((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };
  // const handleSumbit = (event) => {
  //   event.preventDefault();
  // };

  // const handleClear = () => {
  //   setInformation({
  //     id: 0,
  //     name: "",
  //     price: "",
  //     content: "",
  //   });
  // };

  // onSumbit를 click 할 때 화면에 ProductForm을 renderin 해준다
  // 위에 onSumbit를 click 할 때 화면에 div를 rendering 해준다
  return (
    <div>
      <ProductForm
        initialValues={DEFAULT_PRODUCT}
        onSubmit={function (formValues) {
          setProductForm(formValues);
        }}
        formType="NEW"
      />
      {productForm && (
        <ProductForm
          initialValues={productForm || DEFAULT_PRODUCT}
          onSubmit={function (formValues) {
            console.log(formValues);
          }}
          formType="DETAIL"
        />
      )}
    </div>
  );
}
