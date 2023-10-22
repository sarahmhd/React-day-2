import "./todo.css";

import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../../redux/slices/todoSlice";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const todoListGlobal = useSelector((state) => state.todoReducer.todoList);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="todo-form pt-4">
      <h3 className="text-muted mb-4 fw-bold">TODO-S</h3>

      <form onSubmit={handleSubmission} className="w-75 m-auto">
        <div className="mb-3 d-flex justify-content-between align-items-center gap-3">
          <label htmlFor="title" className="form-label fw-bold">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center gap-3">
          <label htmlFor="content" className="form-label fw-bold">
            Content:
          </label>
          <textarea
            name="content"
            value={content}
            className="form-control"
            id="content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
