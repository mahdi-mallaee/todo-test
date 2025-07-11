import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../difinitions";

interface TodoDialogState {
  open: boolean;
  mode: "add" | "edit";
  selectedTodo: Todo;
}

const emptyTodo: Todo = { id: 0, title: "", completed: false };

const initialState: TodoDialogState = {
  open: false,
  mode: "add",
  selectedTodo: emptyTodo
};

const todoDialogSlice = createSlice({
  name: "todoDialog",
  initialState,
  reducers: {
    openAddDialog(state) {
      state.open = true;
      state.mode = "add";
      state.selectedTodo = emptyTodo
    },
    openEditDialog(state, action: PayloadAction<Todo>) {
      state.open = true;
      state.mode = "edit";
      state.selectedTodo = action.payload;
    },
    closeDialog(state) {
      state.open = false;
      state.mode = "add";
      state.selectedTodo = emptyTodo;
    },
    setTodoTitle(state, action: PayloadAction<string>) {
      state.selectedTodo.title = action.payload;
    },
  },
});

export const { openAddDialog, openEditDialog, closeDialog, setTodoTitle } = todoDialogSlice.actions;
export default todoDialogSlice.reducer;
export type { TodoDialogState };
