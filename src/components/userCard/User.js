import React from "react";

const User = (props) => {
  const { user } = props;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <div className="card-img-top">
          <img src={user.img} alt={user.username} />
        </div>
        <div className="card-body d-flex flex-column gap-2 text-center">
          <h6 className="card-title">
            name: {user.name.firstname + " " + user.name.lastname}
          </h6>
          <span>age: {user.age}</span>
          <span>gmail: {user.email}</span>
          <span>phone: {user.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
