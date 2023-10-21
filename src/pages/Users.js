import React, { useEffect, useState } from "react";

import Loader from "../components/loader/Loader";
import UseAxios from "../components/customHook/UseAxios";
import User from "../components/userCard/User";
import axios from "axios";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = UseAxios(`http://localhost:9000/users`);

  if (isLoading) {
    return <Loader />;
  }

  if (error !== null) {
    console.log(error);
    return <p className="text-danger">{error}</p>;
  }

  const usersDiv = users.map((user) => {
    return <User user={user} key={user.id} />;
  });

  return (
    <div className="container my-5">
      <div className="row">{usersDiv}</div>
    </div>
  );
};

export default Users;
