import { useState } from "react";

interface TodoDialogProps {
  onSubmit: (title: string) => void,
  onClose: () => void,
  state: "add" | "edit",
  todoTitle?: string
}

export default function TodoDialog({ onSubmit, onClose, state, todoTitle }: TodoDialogProps) {
  const [title, setTitle] = useState(() => todoTitle || "");

  function _onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onSubmit && title.trim()) {
      onSubmit(title.trim());
      setTitle("");
    } else {
      alert("Title cannot be empty");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20"
      onClick={onClose}>
      <div className="flex flex-col w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg gap-2" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">
          {state === "add" ? "New Todo" : "Edit Todo"}
        </h2>
        <h4 className="text-sm font-bolid">Please write content of todo in input below!</h4>
        <form onSubmit={_onSubmit}>
          <input
            type="text"
            placeholder="Do something!"
            className="border-b border-divider outline-none p-2 w-full mb-4"
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }} 
            onKeyDown={e=>{
              if (e.key === "Enter") {
                _onSubmit(e);
              }
            }}/>
          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="text-gray-500 mr-4 cursor-pointer">
              <span className="text-gray-500">Cancel</span>
            </button>
            <button
              type="submit"
              className="text-primary cursor-pointer">
              {state === "add" ? "Add Todo" : "Edit Todo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}