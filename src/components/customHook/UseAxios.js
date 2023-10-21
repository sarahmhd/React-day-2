import React, { useEffect, useState } from "react";

import axios from "axios";

const UseAxios = (url, method) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method,
      url,
    })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url, method]);

  const AddRow = () => {
    axios
      .post("http://localhost:9000/users", {
        name: {
          firstname: "Rafif",
          lastname: "Mahmoud",
        },
      })
      .then((res) => {
        setData((prev) => [...prev, res.data]);
      });
  };

  const deleteRow = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:9000/users/${id}`);
      setData((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {}
  };

  return { data, isLoading, error, AddRow, deleteRow };
};

export default UseAxios;
