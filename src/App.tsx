import Fab from "./components/fab"
import Header from "./components/header"
import TodoList from "./components/todolist"
import TodoDialog from "./components/todoDialog";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "./store/todolist";
import { openAddDialog, openEditDialog, closeDialog } from "./store/todoDialog";
import type { Todo } from "./difinitions";
import type { RootState } from "./store";


function App() {
  const dispatch = useDispatch();
  const todoDialog = useSelector((state: RootState) => state.todoDialog);

  function handleSubmit(title: string) {
    if (todoDialog.mode === "add") {
      dispatch(addTodo({ id: Date.now(), title, completed: false }));
    } else if (todoDialog.mode === "edit" && todoDialog.selectedTodo.id) {
      dispatch(editTodo({...todoDialog.selectedTodo, title }));
    }
    dispatch(closeDialog());
  }

  function onEdit(_todo: Todo) {
    dispatch(openEditDialog(_todo));
  }

  function onClose() {
    dispatch(closeDialog());
  }

  return (
    <div className='relative bg-background text-on-background min-h-screen'>
      <div
        className='absolute h-full bg-[url("./assets/bg-tile.png")] bg-repeat inset-0 opacity-10 pointer-events-none ' />
      <div className='relative flex flex-col gap-10'>
        <Header />
        <TodoList onEdit={onEdit} />
        <Fab onClick={() => dispatch(openAddDialog())} />
        {todoDialog.open &&
          <TodoDialog
            onSubmit={handleSubmit}
            onClose={onClose}
            state={todoDialog.mode}
            todoTitle={todoDialog.selectedTodo.title} />
        }
      </div>
    </div>
  )
}

export default App
