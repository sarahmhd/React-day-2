import "./login.css";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="wrapper w-50 mx-auto my-5"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <h2>Login</h2>
      <form action="#" id="login">
        <div className="input-box">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your user name"
            {...register("username", {
              required: true,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.username?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors?.username?.type === "pattern" && (
              <span>User name should be letters and digits only</span>
            )}
          </div>
        </div>
        <div className="input-box">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.password?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors?.password?.type === "minLength" && (
              <span>Password must be at least 6 characters</span>
            )}
          </div>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Login" />
        </div>
        <div className="text">
          <h3>
            Don't have an account?
            <Link to="/register">Register now</Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
