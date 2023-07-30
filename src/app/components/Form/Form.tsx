import styles from "./Form.module.css";
import { useState } from "react";

type Props = {
    productId?: string;
    productName?: string;

}

export default function Form(prop: Props){

    const [information, setInformation] = useState({id: 0, name: "", price: "", content: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        // const name = event.target.name;
        // const value = event.target.value;
        
        setInformation((prev) => {
            return {...prev, [name]: value}
        })
        
    }
    const handleSumbit = (event) => {
        event.preventDefault();
    }

    return <form onSubmit={handleSumbit}>
                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <div className={styles.productIDContainer}>
                            <label htmlFor="productID">상품아이디</label>
                            <input type="text" id="productID" name="id" onChange={handleChange}/>
                        </div>
                        <div className={styles.productNameContainer}>
                            <label htmlFor="productName">상품명</label>
                            <input type="text" id="productName" name="name" onChange={handleChange}/>
                        </div>
                        <div className={styles.productPriceContainer}>
                            <label htmlFor="productPrice">판매가격</label>
                            <input type="text" id="productPrice" name="price" onChange={handleChange}/>
                        </div>
                        <div className={styles.productCategoryContainer}>
                            <label htmlFor="productCategory">카테고리</label>
                            <input type="text" id="productCategory"  onChange={handleChange}/>
                        </div>
                        <div className={styles.productDescriptionContainer}>
                            <label htmlFor="productDescription">상세설명</label>
                            <textarea name="content" onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                    <div className={styles.formButtonsContainer}>
                        <button>등록</button>
                        <button>쉬소</button>
                    </div>
                </form>
}