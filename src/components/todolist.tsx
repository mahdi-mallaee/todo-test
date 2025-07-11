import { useDispatch, useSelector } from "react-redux";
import useDate from "../hooks/useDate";
import type { RootState } from "../store";
import TodoItem from "./todoItem";
import { editTodo, removeTodo } from "../store/todolist";
import type { Todo } from "../difinitions";
import { useState } from "react";

export default function TodoList({ onEdit }: { onEdit: (todo: Todo) => void }) {
  const date = useDate();
  const todolist = useSelector((state: RootState) => state.todolist);
  const dispatch = useDispatch();
  const [showCompleted, setShowCompleted] = useState(false);

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
            <div className="text-5xl text-black">{date.getDate()}</div>
            <div className="flex flex-col ">
              <div className="text-black text-xl">{date.toLocaleDateString("en", { month: "short" })}</div>
              <div className="text-sm">{date.getFullYear()}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className={`${!showCompleted ? "text-primary" : ""} cursor-pointer`}
              onClick={() => setShowCompleted(false)}>
              Incomplete Tasks
            </div>
            <div className={`${showCompleted ? "text-primary" : ""} cursor-pointer`}
              onClick={() => setShowCompleted(true)}>
              Completed Tasks
            </div>
          </div>
        </div>

        <div>
          {
            showCompleted ?
              todolist.filter(todo => todo.completed).map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onRemove={handleTodoDelete}
                  onEdit={onEdit}
                  onCheck={handleTodoCheck} />
              )) :
              todolist.filter(todo => !todo.completed).map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onRemove={handleTodoDelete}
                  onEdit={onEdit}
                  onCheck={handleTodoCheck} />
              ))
          }
        </div>
      </div>
    </div>
  );
} 