"use client";

import styles from "./page.module.css";
import Product from "./components/Product";

export default function MenusPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>title</h1>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <Product
            size="cart"
            showCategory={false}
            removable={true}
            product={{ name: "아메리카노", price: 400, category: "커피" }}
          />
        </div>
        <span className={styles.total}>1000</span>
      </div>
      <div className={styles.productListContainer}>
        <Product
          removable={false}
          showCategory={true}
          size="productList"
          product={{ name: "아메리카노", price: 4000, category: "커피" }}
        />
        <Product
          removable={false}
          showCategory={true}
          //   showCategory={Product.price > 2000} map으로 하면된다 {Product && showCategory={product.price > 2000}}
          size="productList"
          product={{ name: "아메리카노", price: 1000, category: "커피" }}
        />
      </div>
    </div>
  );
}
