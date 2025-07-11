import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../difinitions";
import type { RootState } from ".";

const initialState: Todo[] = []

export const todoSlice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push({ ...action.payload })
        },
        editTodo: (state, action: PayloadAction<Todo>) => {
            const index = state.findIndex(todo => todo.id === action.payload.id)
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload }
            }
        }
    }
})

export const { addTodo, editTodo } = todoSlice.actions
export const selectCart = (state: RootState) => state.todolist

export default todoSlice.reducer