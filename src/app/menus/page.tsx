"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Product from "./components/Product";
import { Menu, MenuDB } from "./data";
import NewMenuModal from "./components/NewMenuModal";
import { Neuton } from "next/font/google";

export default function MenusPage() {
  const [productList, setProductList] = useState<Menu[]>([]);
  const [cartList, setCartList] = useState<Menu[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Menu | null>();
  const [totalPrice, setTotalPrice] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // useState = 값의 변경을 감지 하면 rendering
  // useEffect = 값의 변경을 감지 하면 함수 호출
  // [] 없으면 한번만 호출 된다
  // [totalPrice] 이들이 변경이 감지 되면 이 함수를
  useEffect(() => {
    setProductList(MenuDB.select());
  }, []);

  // useEffect(() => {
  //   console.log("totalPrice Changed");
  // }, [totalPrice]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>title</h1>
      </div>
      {!editMode && (
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
                    setTotalPrice(totalPrice - menu.price);
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
          <span className={styles.total}>{totalPrice}</span>
        </div>
      )}
      {editMode && (
        <div className={styles.editMode}>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            메뉴등록
          </button>
          <button onClick={() => setEditMode(false)}>편집모드 종료</button>
        </div>
      )}
      <div className={styles.productListContainer}>
        {productList.map((menu) => {
          return (
            <Product
              key={menu.id}
              removable={editMode}
              showCategory={true}
              size="productList"
              product={menu}
              onClick={() => {
                if (editMode) {
                  setSelectedProduct(menu);
                  setShowModal(true);
                  console.log("수정모달 뛰우기");
                  // eidtMode이 true일때
                  // 재품을 클릭 시 NewMenuModal이 열린다
                  // 열린 NewMenuModal의 input에 클릭 한 재품 정보가 입력되어 있어야된다
                } else {
                  setCartList([...cartList, menu]);
                  setTotalPrice(menu.price + totalPrice);
                }
              }}
              onDelete={() => {
                MenuDB.delete(menu.id);
                setProductList(MenuDB.select());
                // target = MenuDB에 배열에서 삭제 해야 한다
                // id를 찾아 낸다
                // 새로운 배열을 만들어 준다
                // setProductList를 해준다
              }}
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
      <div className="editContainer">
        <div
          onClick={() => {
            if (confirm("편집모드로 진입 하시겠습니까?")) {
              setEditMode(true);
            }
          }}
        >
          메뉴편집
        </div>
      </div>
      {showModal && (
        <NewMenuModal
          onClose={function () {
            setShowModal(false);
            setSelectedProduct(null);
          }}
          onAdd={function (menu) {
            // selectedPrdouct가 Null이 아니면
            console.log("selectedProduct", selectedProduct);
            if (selectedProduct) {
              MenuDB.update({
                id: menu.id || 0,
                name: menu.name,
                price: menu.price,
                category: menu.category,
                imageUrl: menu.imageURL,
              });
            } else {
              console.log("추가");
              MenuDB.add({ ...menu, imageUrl: menu.imageURL });
            }
            // selectedProudct 정부만 수정 해준다
            // selectedProduct가 Null이면
            // 새로 MenuDB.add를 해준다
            setProductList(MenuDB.select());
            setShowModal(false);
          }}
          initialValue={
            selectedProduct
              ? {
                  id: selectedProduct.id,
                  name: selectedProduct.name,
                  price: selectedProduct.price,
                  category: selectedProduct.category,
                  imageURL: selectedProduct.imageUrl,
                }
              : { name: "", price: 0, category: "", imageURL: "" }
            // selectedProduct가 Null이 아니면
            // selectedProudct를 넘겨주고
            // selectedProudct가 Null이면
            // 빈값으로 초기화된 객체
          }
          // 등록할때는 초기 값이 비어 있다
          // 수정 일 때 클릭한 재품의 정보가 들어 가야 된다
        />
      )}
    </div>
  );
}
// react compnoent는 함수다
// onClose and onAdd === Props라고 한다

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

// 기능: 장바구니에 아이템이 담기거나 삭제되면 금액이 변경된다
// 전체 금액 state를 선언한다
// totalPrice선언하고 rendering 해준다

// product를 클릭 하면 금액이 더해진다
// totalPrice에 menu.price를 더해준다
// x를 클릭 하면 금액이 마이너스가 된다
// totalPrice에 menu.price를 빼준다
// state를 rendering 해준다.

// 기능: 편집모드에 진입 할 수 있다
// "editMode state를 선언 한다"
// editMode type은 boolean이다
// true = 편집모드 / false = 일반모드

// "메뉴편집 클릭 하면 장바구니 영역이 편집모드로 변경 된다"
// setEditMode(true)로 해준다

// "편집모드 종료를 클릭 하면 다시 장바구니 영역으로 변경 된다."
// setEditMode(false)로 해준다

// "rendering 조건"
// 장바구니영역 => editMode가 false일때 보인다.
// 편집모드영역 => editMode가 true일때 보인다.

// 기능: 메뉴등록 클릭 하면 Menu등록 Modal이 뜬다

// "showModal state를 선언 해준다"
// showModal의 type은 boolean

// "rendering 조건"
// showModal이 true 일때 <NewMenuModal />이 나타난다

// "<NewMenuModal />" 컴포넌트를 만든다

// "메뉴등록 버튼 클릭하면 모달이 보인다"
// setShowModal(true)
