import { Todo } from "../page";

type Props = {
  todoList: Todo[];
  onChange: (newTodoList: Todo[]) => void;
};

export default function TodoList(props: Props) {
  const { todoList, onChange } = props;

  return (
    <div>
      {todoList.map((todo, i) => {
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
                onChange(newTodoList);
              }}
            />
            {/* value={todo.content} = 현재값 / event = 새로운 입력값 */}
            <input
              type="text"
              value={todo.content}
              onChange={(event) => {
                // input에 입력된 값을 가져온다
                const value = event.target.value;
                // newTodoList 배열을 만든다
                const newTodoList = [...todoList];
                // newTOdoList[i]에 입력된 값을 세팅해준다
                newTodoList[i].content = value;
                // setState해서 렌더링해준다
                onChange(newTodoList);
              }}
            />
            <button
              onClick={() => {
                const deleteTodoList = todoList.filter((t) => t.id !== todo.id);

                onChange(deleteTodoList);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
