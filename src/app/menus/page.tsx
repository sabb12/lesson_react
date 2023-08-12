"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Product from "./components/Product";
import { Menu, MenuDB } from "./data";

export default function MenusPage() {
  const [cartList, setCartList] = useState<Menu[]>([]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>title</h1>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {/* <Product
            size="cart"
            showCategory={false}
            removable={true}
            product={{ name: "아메리카노", price: 400, category: "커피" }}
          /> */}
          {cartList.map((menu) => {
            return (
              <Product
                onDelete={() => {
                  // x 버튼을 누르면 삭제된다
                  // 어떤 menu가 선택 됬는지 알아야 한다
                  // 새로운 배열을 만든다
                  // id를 찾아서 삭제한다
                  const newCartList = cartList.filter(
                    (item) => item.id !== menu.id
                  );
                  // setCartList(새로운 배열)
                  setCartList(newCartList);
                }}
                key={menu.id}
                size="cart"
                showCategory={false}
                removable={true}
                product={menu}
              />
            );
          })}
        </div>
        <span className={styles.total}>1000</span>
      </div>
      <div className={styles.productListContainer}>
        {MenuDB.select().map((menu) => {
          return (
            <Product
              onClick={() => {
                console.log(menu);
                setCartList([...cartList, menu]);
              }}
              key={menu.id}
              removable={false}
              showCategory={true}
              size="productList"
              product={menu}
            />
          );
        })}
        {/* <Product
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
        /> */}
      </div>
    </div>
  );
}

// cartList 카토목록을 담는 상태를 선언
// cartList를 map으로 렌더링한다
// menu를 클릭 할 때
// 새로운 배열을 만든다
// 클릭한 menu를 찾는다
// cartList에 menu를 추가 한다

// x 버튼을 누르면 삭제된다
//
// 어떤 menu가 선택 됬는지 알아야 한다
// 새로운 배열을 만든다
// id를 찾아서 삭제한다
// setCartList(새로운 배열)
