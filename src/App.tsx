import { useState } from "react";
import Fab from "./components/fab"
import Header from "./components/header"
import TodoList from "./components/todolist"
import AddTodoDialog from "./components/todoDialog";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todolist";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const dispatch = useDispatch();

  function handleAddTodo(title: string) {
    dispatch(addTodo({ id: Date.now(), title, completed: false }));
    setShowAddTodo(false);
  }

  return (
    <div className='relative bg-background text-on-background min-h-screen'>
      <div
        className='absolute h-full bg-[url("./assets/bg-tile.png")] bg-repeat inset-0 opacity-10 pointer-events-none ' />
      <div className='relative flex flex-col gap-10'>
        <Header />
        <TodoList />
        <Fab onClick={() => setShowAddTodo(true)} />
        {showAddTodo &&
          <AddTodoDialog onSubmit={handleAddTodo} onClose={() => setShowAddTodo(false)} />
        }
      </div>
    </div>
  )
}

export default App
