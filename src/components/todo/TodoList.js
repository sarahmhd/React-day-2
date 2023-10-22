import { useSelector } from "react-redux";

const TodoList = ({ todos, deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border p-3 rounded-2 d-flex position-relative">
              <div className="text d-flex align-items-start flex-column">
                <p>
                  <span className="fw-bold"> Title :</span> {todo.payload.title}
                </p>
                <p>
                  <span className="fw-bold">Content :</span>
                  {todo.payload.content}
                </p>
                <p className="x-icon" onClick={() => deleteTodo(i)}>
                  x
                </p>
              </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left todos-list">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
