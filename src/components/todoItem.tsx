import { MdCheck, MdDelete, MdEdit } from "react-icons/md";
import type { Todo } from "../difinitions";

interface TodoItemProps {
  todo: Todo,
  onRemove: (id: number) => void,
  onEdit: (todo: Todo) => void,
  onCheck: (todo: Todo) => void
}

export default function TodoItem({ todo, onRemove, onEdit, onCheck }: TodoItemProps) {
  return (
    <div className="h-11 px-4 flex items-center justify-between gap-4 border-b border-divider">
      <span className={`${!todo.completed ? "border" : ""} border-on-background rounded-full h-5 w-5 cursor-pointer`}
        onClick={() => {
          onCheck({ ...todo, completed: !todo.completed });
        }}>
        {todo.completed &&
          <span className="flex items-center justify-center w-full h-full bg-success rounded-full">
            <MdCheck className="h-4 w-4 text-white" />
          </span>
        }
      </span>
      <h3 className={`text-md grow ${todo.completed ? "line-through text-gray-400" : ""}`}>
        {todo.title}
      </h3>
      {!todo.completed &&
        <button onClick={() => onEdit(todo)} className="text-blue-500 cursor-pointer">
          <MdEdit className="h-5 w-5" />
        </button>
      }
      <button onClick={() => onRemove(todo.id)} className="text-red-500 cursor-pointer">
        <MdDelete className="h-5 w-5" />
      </button>
    </div>
  );
}