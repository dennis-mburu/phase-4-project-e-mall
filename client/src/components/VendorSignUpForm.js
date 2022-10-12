import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VendorSignupForm({setUser}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/api/vendor_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate('/manage_products')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <div className="form-container">
        <h1 className="text-center p-6 text-4xl font-medium">
          VENDOR SIGN UP
        </h1>
        <form
          className=" w-2/3 my-6 mx-auto flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username" className="text-l"  >
            UserName:
          </label>
          <input
            className="bg-[#0a0a23] mt-2 h-8"
            required
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="mt-5 text-xl" >
            Password:
          </label>
          <input
          required
            className="bg-[#0a0a23] mt-2 h-8"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />



          <label htmlFor="password_confirmation" className="mt-5 text-xl">
            Confirm Password:
          </label>
          <input
            className="bg-[#0a0a23] mt-2 h-8"
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />



          <button class="bg-blue-500 hover:bg-blue-700 mt-6 w-1/3 mx-auto text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
          <h2 className="text-center mt-6 py-6 text-xl ">
            Already Registered?
          </h2>

          <Link
            to="/vendor_login"
            className="text-center text-l text-blue-500 underline hover:text-teal-200"
          >
            Log in here
          </Link>
          {errors.map((error) => {
            // return <h1 key={error} className="text-red-500 text-center mt-3">{error}!</h1>
            return (
              <div
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
                role="alert"
              >
                <span class="block sm:inline">{error}</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
}

export default VendorSignupForm;
