import { useSelector } from "react-redux";
import useDate from "../hooks/useDate";
import type { RootState } from "../store";

export default function TodoList() {
  const date = useDate();
  const todolist = useSelector((state: RootState) => state.todolist);

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
            <div key={todo.id} className="p-4 bg-white">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <p className="text-sm text-gray-500">{todo.completed ? "Completed" : "Incomplete"}</p>
            </div>
          ))}
        </div>

      </div>


    </div>
  );
} 