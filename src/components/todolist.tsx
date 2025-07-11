import { useDispatch, useSelector } from "react-redux";
import useDate from "../hooks/useDate";
import type { RootState } from "../store";
import TodoItem from "./todoItem";
import { editTodo, removeTodo } from "../store/todolist";
import type { Todo } from "../difinitions";

export default function TodoList({onEdit}: { onEdit: (todo: Todo) => void }) {
  const date = useDate();
  const todolist = useSelector((state: RootState) => state.todolist);
  const dispatch = useDispatch();

  function handleTodoDelete(id: number) {
    dispatch(removeTodo(id))
  }

  function handleTodoCheck(todo: Todo) {
    dispatch(editTodo(todo));
  }

  return (
    <div className="flex grow justify-center">

      <div className="w-full max-w-5xl bg-background p-10 rounded-3xl shadow-md flex flex-col gap-5">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">
            <div>{date.getDate()}</div>
            <div>
              <div>{date.toLocaleDateString("en", { month: "short" })}</div>
              <div>{date.getFullYear()}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div>Incomplete Tasks</div>
            <div>Completed Tasks</div>
          </div>

        </div>

        <div>
          {todolist.map(todo => (
            <TodoItem
              todo={todo}
              onEdit={onEdit}
              onCheck={handleTodoCheck}
              onRemove={handleTodoDelete} />
          ))}
        </div>

      </div>


    </div>
  );
} 