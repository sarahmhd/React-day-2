import "./Todo.css";

import { addTask, removeTask } from "../../redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { useState } from "react";

function Todo() {
  const dispatch = useDispatch();
  const todoListGlobal = useSelector((state) => state.todoReducer.todoList);

  const [todos, setTodos] = useState([
    {
      title: "learn node js",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "go to the sea",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "walk the dog",
      content: "Lorem ipsum dolor sit amet.",
    },
  ]);

  const addTodo = (task) => {
    dispatch(addTask(task));
  };

  const deleteTodo = (index) => {
    dispatch(removeTask(index));
  };

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoListGlobal} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
