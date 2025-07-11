import { useState } from "react";
import Fab from "./components/fab"
import Header from "./components/header"
import TodoList from "./components/todolist"
import AddTodoDialog from "./components/todoDialog";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);

  function handleAddTodo(title: string) {
    // Logic to add todo
    console.log("Adding todo:", title);
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
