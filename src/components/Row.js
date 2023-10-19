import { useState } from "react";

const Row = () => {
  const [rows, setRows] = useState([
    { id: 1, fName: "sarah", lName: "mohamed", title: "Front end developer" },
    { id: 2, fName: "ahmed", lName: "mohamed", title: "Front end developer" },
    { id: 3, fName: "mohamed", lName: "ahmed", title: "Front end developer" },
    { id: 4, fName: "omar", lName: "ahmed", title: "Front end developer" },
    { id: 5, fName: "lyly", lName: "mohamed", title: "Front end developer" },
    { id: 6, fName: "solo", lName: "mohamed", title: "Front end developer" },
    { id: 7, fName: "david", lName: "sultan", title: "Front end developer" },
  ]);
  const deleteRow = (id) => {
    let data = rows.filter((row) => row.id !== id);
    setRows(data);
  };

  const AddRow = () => {
    let data = {
      id: 8,
      fName: "Rafif",
      lName: "Mahmoud",
      title: "Front end developer",
    };
    setRows([...rows, data]);
  };

  const data = rows.map((row) => {
    return (
      <tr>
        <th scope="row">{row.id}</th>
        <td>{row.fName}</td>
        <td>{row.lName}</td>
        <td>{row.title}</td>
        <td>
          <a
            className="btn btn-primary btn-sm "
            href="#"
            role="button"
            onClick={() => deleteRow(row.id)}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div className="container">
      <table class="table table-dark mt-5">
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
      <button className="btn btn-primary" onClick={() => AddRow()}>
        Add row
      </button>
    </div>
  );
};

export default Row;
