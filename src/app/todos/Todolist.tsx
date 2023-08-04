"use client";

import { useState } from "react";

type Todo = {
    id: number;
    content: string;
    checked: boolean;
}


const TODO_LIST_DUMMY = [
    { id: Date.now(), content: "hi", checked: false },
    { id: Date.now(), content: "hi2", checked: false },
  ];

export default function Todolist(){
    
    const [todos, setTodos] = useState(TODO_LIST_DUMMY)
    const [input, setInput] = useState<string>("");

    const handleToggle = (id: number)=>{
        setTodos(
            todos.map((todo) => {
                if(todo.id === id){
                    return {...todo, checked: !todo.checked}
                }
                return todo;
            })
        );
    }

    const handleClick = () => {
        const newTodo: Todo =  { id: Date.now(), content: input, checked: false }
        setTodos([...todos, newTodo])
    }

    return <div>
        <input type="text" onChange={(e) => setInput(e.currentTarget.value)}/>
        <button onClick={handleClick} >Add</button>
        <div>
        <ul>
            {todos.map((todo) => (<li key={todo.id} onClick={()=> handleToggle(todo.id)} >{todo.content}</li>))}
        </ul>
        </div>
    </div>
}