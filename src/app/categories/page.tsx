"use client";

import { useEffect, useState } from "react";

import * as CategoryRepository from "@/repositories/categories/CategoryRepository";
import { Category } from "@/repositories/categories/types";

export default function CategoryPage() {
  const [depth1, setDepth1] = useState<Category[]>([]);
  const [depth2, setDepth2] = useState<Category[]>([]);
  const [depth3, setDepth3] = useState<Category[]>([]);

  useEffect(() => {
    CategoryRepository.getList({ depth: 1 }).then(function (data) {
      setDepth1(data);
    });
  }, []);

  return (
    <div>
      <div>
        {depth1.map(function (category) {
          return (
            <div
              key={category.id}
              onClick={function () {
                CategoryRepository.getList({ parentId: category.id }).then(
                  function (data) {
                    // depth3을 빈배열로 해준다
                    setDepth2(data);
                    setDepth3([]);
                  }
                );
              }}
            >
              {category.name}
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        {depth2.map(function (category) {
          return (
            <div
              key={category.id}
              onClick={function () {
                CategoryRepository.getList({ parentId: category.id }).then(
                  function (data) {
                    setDepth3(data);
                  }
                );
              }}
            >
              {category.name}
              <button
                onClick={function () {
                  // Depth2 삭제 했을 때
                  // "클릭 된 자기자신 삭제"
                  // 클릭된 카테고리 id로 삭제
                  CategoryRepository.deleteById(category.id).then(function () {
                    // "클릭 된 카테고리의 하위 카테고리 삭제"
                    // parentId = 클릭된카테고리id
                    // 카테고리List parentId === 클릭된카테고리id 같으면 삭제
                    CategoryRepository.deleteByParentId(category.id).then(
                      function () {
                        CategoryRepository.getList({
                          parentId: category.parentId,
                        }).then(function (data) {
                          setDepth2(data);
                          setDepth3([]);
                        });
                      }
                    );
                  });
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        {depth3.map(function (category) {
          return (
            <div key={category.id}>
              {category.name}
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
