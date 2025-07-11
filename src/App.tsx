import { useState } from "react";
import Fab from "./components/fab"
import Header from "./components/header"
import TodoList from "./components/todolist"
import TodoDialog from "./components/todoDialog";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "./store/todolist";
import type { Todo } from "./difinitions";

function App() {
  const [showTodoDialog, setShowTodoDialog] = useState(false);
  const [TodoDialogState, setTodoDialogState] = useState<"add" | "edit">("add");
  const [todo, setTodo] = useState<Todo | null>(null);
  const dispatch = useDispatch();

  function handleSubmit(title: string) {
    if (TodoDialogState === "add") {
      dispatch(addTodo({ id: Date.now(), title, completed: false }));
    } else if (TodoDialogState === "edit" && todo) {
      dispatch(editTodo({ ...todo, title }));
    }
    onClose()
  }

  function onEdit(_todo: Todo) {
    setTodoDialogState("edit");
    setShowTodoDialog(true);
    setTodo(_todo);
  }

  function onClose() {
    setShowTodoDialog(false);
    setTodoDialogState("add");
    setTodo(null);
  }

  return (
    <div className='relative bg-background text-on-background min-h-screen'>
      <div
        className='absolute h-full bg-[url("./assets/bg-tile.png")] bg-repeat inset-0 opacity-10 pointer-events-none ' />
      <div className='relative flex flex-col gap-10'>
        <Header />
        <TodoList onEdit={onEdit} />
        <Fab onClick={() => setShowTodoDialog(true)} />
        {showTodoDialog &&
          <TodoDialog
            onSubmit={handleSubmit}
            onClose={onClose}
            state={TodoDialogState}
            todoTitle={todo?.title} />
        }
      </div>
    </div>
  )
}

export default App
