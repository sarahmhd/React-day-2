import { useEffect, useState } from "react";

import Loader from "./loader/Loader";
import UseAxios from "./customHook/UseAxios";

const Row = () => {
  const {
    data: rows,
    isLoading,
    error,
    AddRow,
    deleteRow,
  } = UseAxios(`http://localhost:9000/users`, "get");

  const addHandler = () => {
    AddRow();
  };

  const deleteHandler = (id) => {
    deleteRow(id);
  };

  const data = rows.map((row) => {
    return (
      <tr key={row.id}>
        <th scope="row">{row.id}</th>
        <td>{row.name.firstname}</td>
        <td>{row.name.lastname}</td>
        <td>Front End Developer</td>
        <td>
          <a
            className="btn btn-primary btn-sm "
            href="#"
            role="button"
            onClick={() => deleteHandler(row.id)}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
      <button className="btn btn-primary" onClick={() => addHandler()}>
        Add row
      </button>
    </div>
  );
};

export default Row;
