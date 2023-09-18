"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import * as CategoryRepository from "@/repositories/categories/CategoryRepository";
import { Category } from "@/repositories/categories/types";
import CategoryList from "./components/CategoryList";

export default function CategoryPage() {
  const [depth1, setDepth1] = useState<Category[]>([]);
  const [depth2, setDepth2] = useState<Category[]>([]);
  const [depth3, setDepth3] = useState<Category[]>([]);
  const [depth2InputValue, setDepth2InputValue] = useState("");
  const [depth3InputValue, setDepth3InputValue] = useState("");
  // useState<Category> = Category 배열 중에서 하나만 선택해서 가지고 있는다.
  const [depth1Selected, setDepth1Selected] = useState<Category>();
  const [detph2Selected, setDepth2Selected] = useState<Category>();

  useEffect(() => {
    CategoryRepository.getList({ depth: 1 }).then(function (data) {
      setDepth1(data);
    });
  }, []);

  return (
    <div>
      <CategoryList
        depthList={depth1}
        depthSelected={depth1Selected}
        // 객체 타입일 때는 parameter이름이 동일 해야된다
        onSelected={function (category) {
          setDepth1Selected(category);
          CategoryRepository.getList({ parentId: category.id }).then(
            // .then에서 .then(data) parameter가 있는건 resolve에 전달되는 값이 있는지에 따라 있고 없는거다
            function (data) {
              // depth3을 빈배열로 해준다
              setDepth2(data);
              setDepth3([]);
            }
          );
        }}
        onAdd={function (categoryName) {
          // 클릭시 선택된 depth1Selected의 부모 id를 찾는다
          const newCategory = {
            name: categoryName,
            parentId: 0,
            depth: 1,
          };
          // DB에 부모 하위에 추가해준다
          CategoryRepository.create(newCategory).then(function () {
            // Depth2 list를 조회 해주고 redering 해준다
            CategoryRepository.getList({ depth: 1 }).then(function (data) {
              setDepth1(data);
            });
          });
        }}
        onChange={function (categoryName, category) {
          CategoryRepository.update({
            id: category.id,
            name: categoryName || "",
          }).then(function () {
            CategoryRepository.getList({ depth: 1 }).then(function (data) {
              setDepth1(data);
            });
          });
        }}
        onDelete={function (category) {
          CategoryRepository.deleteById(category.id).then(function () {
            CategoryRepository.deleteByParentId(category.id).then(function () {
              const promiseList = depth2.map(function (item) {
                return new Promise(function (resolve) {
                  CategoryRepository.deleteByParentId(item.id).then(
                    function () {
                      resolve("");
                    }
                  );
                });
              });
              Promise.all([promiseList]).then(function () {
                CategoryRepository.getList({ depth: 1 }).then(function (data) {
                  setDepth1(data);
                  setDepth2([]);
                  setDepth3([]);
                });
              });
            });
          });
        }}
      />
      <hr />
      <input
        type="text"
        value={depth2InputValue}
        onChange={function (e) {
          setDepth2InputValue(e.target.value);
        }}
      />
      <button
        onClick={function () {
          // 클릭시 선택된 depth1Selected의 부모 id를 찾는다
          const newCategory = {
            name: depth2InputValue,
            parentId: depth1Selected?.id || 0,
            depth: 2,
          };
          // DB에 부모 하위에 추가해준다
          CategoryRepository.create(newCategory).then(function () {
            // Depth2 list를 조회 해주고 redering 해준다
            CategoryRepository.getList({ parentId: depth1Selected?.id }).then(
              function (data) {
                setDepth2(data);
                setDepth2InputValue("");
              }
            );
          });
        }}
      >
        추가
      </button>
      <CategoryList
        depthList={depth2}
        // 객체 타입일 때는 parameter이름이 동일 해야된다
        onSelected={function (category) {
          CategoryRepository.getList({ parentId: category.id }).then(function (
            data
          ) {
            setDepth3(data);
          });
        }}
        onAdd={function (categoryName, parentId) {
          // 클릭시 선택된 depth1Selected의 부모 id를 찾는다
          const newCategory = {
            name: categoryName,
            parentId: parentId || 0,
            depth: 2,
          };
          // DB에 부모 하위에 추가해준다
          CategoryRepository.create(newCategory).then(function () {
            // Depth2 list를 조회 해주고 redering 해준다
            CategoryRepository.getList({ parentId: depth1Selected?.id }).then(
              function (data) {
                setDepth2(data);
              }
            );
          });
        }}
        onChange={function (categoryName, category) {
          CategoryRepository.update({
            id: category.id,
            name: categoryName || "",
          }).then(function () {
            CategoryRepository.getList({
              parentId: category.parentId,
            }).then(function (data) {
              setDepth2(data);
            });
          });
        }}
        onDelete={function (category) {
          CategoryRepository.deleteById(category.id).then(function () {
            CategoryRepository.deleteByParentId(category.id).then(function () {
              CategoryRepository.getList({
                parentId: category.parentId,
              }).then(function (data) {
                setDepth2(data);
                setDepth3([]);
              });
            });
          });
        }}
      />

      <hr />
      <input
        type="text"
        value={depth3InputValue}
        onChange={function (e) {
          setDepth3InputValue(e.target.value);
        }}
      />

      <button
        onClick={function () {
          // "추가를 누르면 depth3에 새로운 카테고리가 추가된다"
          // newCategory = {name: , depth, parentId}가 필요한다
          const newCategory = {
            name: depth3InputValue,
            depth: 3,
            parentId: detph2Selected?.id || 0,
          };
          // DB에 저장해준다
          CategoryRepository.create(newCategory).then(function () {
            // DB에서 조회 하고 rendering 해준다
            CategoryRepository.getList({ parentId: detph2Selected?.id }).then(
              function (data) {
                setDepth3(data);
                setDepth3InputValue("");
              }
            );
          });
        }}
      >
        추가
      </button>
      <div>
        {depth3.map(function (category) {
          return (
            <div key={category.id}>
              {category.name}
              <button
                onClick={function (e) {
                  e.stopPropagation();
                  const categoryName =
                    prompt("수정할 카테고리명을 입력해주세요");
                  CategoryRepository.update({
                    id: category.id,
                    name: categoryName || "",
                  }).then(function () {
                    CategoryRepository.getList({
                      parentId: category.parentId,
                    }).then(function (data) {
                      setDepth3(data);
                    });
                  });
                }}
              >
                수정
              </button>
              <button
                onClick={function () {
                  CategoryRepository.deleteById(category.id).then(function () {
                    CategoryRepository.getList({
                      parentId: category.parentId,
                    }).then(function (data) {
                      setDepth3(data);
                    });
                  });
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// control + n 파일 만든다
// ctl .

// state
// depth1, depth2, depth3

// 최초 진입시
// categoryRespository에서 depth === 1인 카테고리르 가져온다
// 가져온 카테고리를 setDepth1으로 세팅해준다

// Depth1에서 페브리를 Click 했을 때
// 클릭한 id를 찾는다
// categoryRespository에서 parenetId === id인 카테고리르 가져온다
// 가져온 카테고리를 setDepth2으로 세팅해준다

// 삭제
// Depth3 삭제 했을 때
// 클릭 된 id찾아서 삭제 해준다
// Depth2 삭제 했을 때
// 클릭 된 자기자신 삭제
// 클릭된 카테고리 id로 삭제
// 클릭 된 카테고리의 하위 카테고리 삭제
// parentId = 클릭된카테고리id
// 카테고리List parentId === 클릭된카테고리id 같으면 삭제
// Depth1 삭제 했을 때
// 클릭 된 자기사진 삭제
// 클릭된 카테고리 id로 삭제
// 클릭 된 카테고리의 하위 Depth2 카테고리 삭제
// parentId = 클릭된카테고리 id
// 카테고리List parentId === 클릭된카테고리id 같으면 삭제
// depth2를 돌면서 depth3를 삭제 한다
// 카테고리List parentId === depth2 같으면 삭제
