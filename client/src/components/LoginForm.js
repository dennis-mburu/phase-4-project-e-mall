import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const navigate =useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/customer_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          navigate("/products")
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // console.log(errors);

  return (
    <div className="form-container">
      <h1 className="text-center p-6 text-5xl font-medium">Login</h1>
      <form
        className=" w-2/3 my-6 mx-auto flex flex-col"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" className="text-l">
          UserName:
        </label>
        <input
          className="bg-[#0a0a23] mt-2 h-8"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="mt-5 text-xl">
          Password:
        </label>
        <input
          className="bg-[#0a0a23] mt-2 h-8"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
          {errors.map(error => {
            return <h1 key={error} className="text-red-500 text-center mt-3">{error}!</h1>
          })}
      </form>
    </div>
  );
}

export default LoginForm;
