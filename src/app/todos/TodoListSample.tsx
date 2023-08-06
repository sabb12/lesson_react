
"use client";

import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

type Todo = {
    id: number;
    content: string;
    checked: boolean;
}


const TODO_LIST_DUMMY:[] = [
];

export default function TodoListHTML(){

  const [todoList, setTodoList] = useState<Todo[]>(TODO_LIST_DUMMY);

  return <div>
    {todoList
        .filter((todo) => !todo.checked)
        .map((todo, i) => {
          return (
            <div key={i} className="bodyWrapper">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={(event) => {
                  // checked 된걸 배열에서 변경해준다
                  // 무적건 새로운 배열 만들어 줘야한다
                  const newTodoList = [...todoList];
                  // map todo랑 새로운 배열에 id랑 비교해서 찾기
                  // find는 1개를 찾을거라는 보장이 없어서 if (!targetTodo) return;의 방어 코드를 해줘야 한다
                  const targetTodo = newTodoList.find((t) => t.id === todo.id);
                  if (!targetTodo) return;
                  targetTodo.checked = event.target.checked;
                  //render = setTodoList
                  setTodoList(newTodoList);
                }}
              />
              <div>{todo.content}</div>
              <button
                onClick={() => {
                  const deleteTodoList = todoList.filter(
                    (t) => t.id !== todo.id
                  );

                  setTodoList(deleteTodoList);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
  </div>
}