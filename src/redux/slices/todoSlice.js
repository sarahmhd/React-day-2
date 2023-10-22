import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, task) => {
      state.todoList.push(task);
    },
    removeTask: (state, index) => {
      state.todoList = state.todoList.filter((todo, i) => i !== index.payload);
    },
    removeAllTasks: (state) => {
      state.todoList.length = 0;
    },
  },
});

export const { addTask, removeTask, removeAllTasks } = todoSlice.actions;
