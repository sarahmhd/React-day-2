// create store

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./slices/counterSlice";
import { todoSlice } from "./slices/todoSlice";

const reducer = combineReducers({
  counterReducer: counterSlice.reducer,
  todoReducer: todoSlice.reducer,
});

export const store = configureStore({
  reducer,
});
