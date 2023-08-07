"use client";

import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  content: string;
  checked: boolean;
};

const TODO_LIST_DUMMY: [] = [];

export default function TodoListPage() {
  const [todoList, setTodoList] = useState<Todo[]>(TODO_LIST_DUMMY);
  const [input, setInput] = useState("");

  const handleClick = () => {
    // if(input !== ""){
    const newTodo: Todo = { id: Date.now(), content: input, checked: false };
    // todoList.push(newTodo)
    // etTodoList(todoList);
    setTodoList([...todoList, newTodo]);
    // setTodoList(todoList.concat(newTodo));
    setInput("");
    // }
  };

  return (
    <div>
      <Input
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        actionButton={<Button onClick={handleClick}>추가</Button>}
      />
      <div>
        {/* <ul>
            {todoList.map((todo) => (<li key={todo.id} onClick={()=> handleToggle(todo.id)} >{todo.content}</li>))}
        </ul> */}
        <h3>오늘 할 일</h3>
        <TodoList
          todoList={todoList.filter((todo) => !todo.checked)}
          onChange={(newTodoList) => {
            setTodoList(newTodoList);
          }}
        />

        <h3>완료 한 일</h3>
        <TodoList
          todoList={todoList.filter((todo) => todo.checked)}
          onChange={(newTodoList) => {
            setTodoList(newTodoList);
          }}
        />
      </div>
    </div>
  );
}
