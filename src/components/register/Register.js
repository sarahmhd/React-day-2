import "../login/login.css";

import { DevTool } from "@hookform/devtools";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: "reading", label: "Reading" },
    { value: "fishing", label: "Fishing" },
    { value: "walking", label: "Walking" },
  ];

  return (
    <div
      className="wrapper w-50 mx-auto my-5"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <h2>Registration</h2>
      <form action="#" noValidate>
        <div className="input-box">
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.name?.type === "required" && (
              <span>this field is required</span>
            )}
          </div>
        </div>
        <div className="input-box">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.email?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span>Please Enter Valid Email</span>
            )}
          </div>
        </div>
        <div className="input-box">
          <input
            id="username"
            type="email"
            placeholder="User name"
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
            placeholder="Create password"
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
        <div className="input-box">
          <input
            id="repeat_pass"
            type="password"
            placeholder="Confirm password"
            {...register("repeat_pass", {
              required: true,
              validate: (val) =>
                val === watch("password") || "password doesn't match",
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.repeat_pass?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors?.repeat_pass?.type === "validate" && (
              <span>{errors?.repeat_pass?.message}</span>
            )}
          </div>
        </div>
        <div className="input-box">
          <Controller
            name="hoppies"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} options={options} isMulti />
            )}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.hoppies?.type === "required" && (
              <span>this field is required</span>
            )}
          </div>
        </div>
        <div className="policy d-flex flex-column align-items-start">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              {...register("checkbox", { required: true })}
            />
            <h3>I accept all terms & condition</h3>
          </div>
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.checkbox?.type === "required" && (
              <span className="">this field is required</span>
            )}
          </div>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Register Now" />
        </div>
        <div className="text">
          <h3>
            Already have an account?
            <Link to={"/login"}>Login now</Link>
          </h3>
        </div>
      </form>

      <DevTool control={control} placement="top-left" />
    </div>
  );
};

export default Register;
