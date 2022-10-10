import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="form-container">
      <h1 className="text-center p-6 text-5xl font-medium">Login</h1>
      <form className=" w-2/3 my-6 mx-auto flex flex-col">
        <label htmlFor="username" className="text-l">
          UserName:
        </label>
        <input className="bg-[#0a0a23] mt-2 h-8" />
        <label htmlFor="password" className="mt-5 text-xl">
          Password:
        </label>
        <input className="bg-[#0a0a23] mt-2 h-8" />
        <button class="bg-blue-500 hover:bg-blue-700 mt-6 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <h2 className="text-center mt-6 py-6 text-xl ">
          Don't have an account?
        </h2>

        <Link
          to="/signup"
          className="text-center text-l text-blue-500 underline hover:text-teal-200"
        >
          Sign Up here
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
