"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function UserListPage() {
  const [userList, setUserList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className={styles.container}>
      <div>회원목록</div>
      <div className={styles.listContainer}>
        {userList.map((list, id) => {
          return (
            <div className={styles.itemContainer} key={id}>
              <div className={styles.imageWrapper}>
                <img
                  src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.list}>
                <div>가입정보</div>
                <div>아이디</div>
                <div>성별</div>
                <div>가입일시</div>
                <div>이메일</div>
                <hr />
                <div>이름</div>
                <div>전화번호</div>
                <div>주소</div>
              </div>
            </div>
          );
        })}
      </div>
      <div>pagination</div>
    </div>
  );
}
