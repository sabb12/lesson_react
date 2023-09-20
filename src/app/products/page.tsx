"use client";

import { supabase } from "@/repositories";
import styles from "./page.module.css";
// * as는 이 파일에서 모든걸 가져 오겠다
// as "CategoryRepository"  이름은 아무 이름으로 정할 수 있다
import * as CategoryRepository from "@/repositories/categories/CategoryRepository";
import { Category } from "@/repositories/categories/types";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [categoryDepth1List, setCategoryDepth1List] = useState<Category[]>([]);
  const [depth1Category, setDepth1Category] = useState<Category>();

  const [categoryDepth2List, setCategoryDepth2List] = useState<Category[]>([]);
  const [depth2Category, setDepth2Category] = useState<Category>();

  const [categoryDepth3List, setCategoryDepth3List] = useState<Category[]>([]);
  const [depth3Category, setDepth3Category] = useState<Category>();

  const [imageList, setImageList] = useState<File[]>([]);

  // 화면이 처음 rendering(진입) 했을 때 depth1 selectedBox가 그려져 있어야된다
  useEffect(() => {
    CategoryRepository.getList({ depth: 1 }).then(function (data) {
      setCategoryDepth1List(data);
    });
  }, []);

  const uploadImageList = function (fileList: File[]) {
    const promiseList = fileList.map(function (file, i) {
      return new Promise(function (resolve) {
        const filename = `${file.name}`;
        supabase.storage
          .from("products")
          .upload(filename, file)
          .then(function ({ data, error }) {
            console.log(i, data?.path);
            resolve(data?.path);
          });
      });
    });
    return Promise.all(promiseList);
  };

  //   const asyncUploadImageList = function (fileList: File[]) {
  //     fileList.forEach(function (file, i) {
  //       const filename = `${file.name}`;
  //       supabase.storage
  //         .from("products")
  //         .upload(filename, file)
  //         .then(function ({ data, error }) {
  //           console.log(i, data?.path);
  //         });
  //     });
  //   };

  return (
    <div>
      {/* <input
        type="file"
        onChange={function (e) {
          const file = e.target.files[0];
          const filename = `${file.name}`;
          supabase.storage
            .from("products")
            .upload(filename, file)
            .then(function ({ data, error }) {
              console.log(data?.path);
            });
        }}
      /> */}
      <div>
        <input
          type="file"
          multiple
          onChange={function (e) {
            if (!e.target.files) return;
            const files: File[] = Array.from(e.target.files);
            setImageList(files);
          }}
        />
      </div>
      {imageList.map((image, i) => {
        console.log(URL.createObjectURL(image));
        return (
          <img
            key={i}
            alt=""
            src={URL.createObjectURL(image)}
            width={50}
            height={50}
          />
        );
      })}
      <div>
        <select
          onChange={function (e) {
            // 선택된거 저장하고
            const category = categoryDepth1List.find(function (c) {
              return c.id === Number(e.target.value);
            });
            setDepth1Category(category);
            // depth2 데이터조회해서 setState
            CategoryRepository.getList({ parentId: category?.id || 0 }).then(
              function (data) {
                setCategoryDepth2List(data);
              }
            );
          }}
        >
          {categoryDepth1List.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <select
          onChange={function (e) {
            // 선택된거 저장하고
            const category = categoryDepth2List.find(function (c) {
              return c.id === Number(e.target.value);
            });
            setDepth2Category(category);
            // depth2 데이터조회해서 setState
            CategoryRepository.getList({ parentId: category?.id || 0 }).then(
              function (data) {
                setCategoryDepth3List(data);
              }
            );
          }}
        >
          {categoryDepth2List.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <select
          onChange={function (e) {
            // 선택된거 저장하고
            const category = categoryDepth3List.find(function (c) {
              return c.id === Number(e.target.value);
            });
            setDepth3Category(category);
          }}
        >
          {categoryDepth3List.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <button
        onClick={function () {
          console.log(
            depth1Category?.name,
            depth2Category?.name,
            depth3Category?.name
          );

          uploadImageList(imageList).then(function (data) {
            const fetchData = {
              imageUrls: data,
              depth1: depth1Category?.name,
              depth2: depth2Category?.name,
              deth3: depth3Category?.name,
            };
            console.log(fetchData);
            // ProductRepoitory.create(fetchData).then(funciton(){})
          });

          //   asyncUploadImageList(imageList);
          //   uploadImageList(imageList);
        }}
      >
        저장
      </button>
    </div>
  );
}

// Event
// 화면이 처음 rendering(진입) 했을 때 depth1 selectedBox가 그려져 있어야된다
// Depth1에서 선택 했을 때 depth2 selectedBox가 그려져야 된다
// depth2에서 선택 했을 때 depth3 selectedBox가 그려져야 된다
// depth3에서 선택 했을 때 선택한 category 데어터를 저장 해준다

// state
// categoryDepth1List: Category[], 용도: depth1 category 이름을 rendering 해준다
// depth1Category: Category, 용도: 선택한 category 데어터를 저장 해준다
// categoryDepth2List: Category[], 용도: depth2 category 이름을 rendering 해준다
// depth2Category: Category, 용도: 선택한 category 데어터를 저장 해준다
//categoryDepth3List: Category[], 용도: depth3 category 이름을 rendering 해준다
// depth3Category: Category, 용도: 선택한 category 데어터를 저장 해준다

// Rendering
// depth1:
// const [categoryDepth1List, setCategoryDepth1List] = useState<Category[]>([])
// // const depth1Cateogry = ["가구", "페브릭", "주방용품"]
//       <select>
//         {categoryList.map(category => {
//                   return <option value={category.id}>{category.name}</option>

//         })
//         }
//       </select>

// // depth2:
// const [categoryDepth1List, setCategoryDepth1List] = useState<Category[]>([])
// <select>
// {depth2.map((product) => {
//     return <option value={product.id}>{product.name}</option>
// })
// }
// </select>
