import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle , FaPowerOff} from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function handleCustomerLogOut() {
    fetch("/api/customer_logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          color="blue"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight text-teal-200 hover:text-white hover:cursor-pointer mr-5">
          <Link to="/">E-MALL</Link>
        </span>
      </div>

      <div className="flex items-center text-lg">
        {user ? (
          <Link
            to="/cart"
            className=" text-teal-200 hover:text-white mr-5 text-"
          >
            <FaShoppingCart />
          </Link>
        ) : null}

        <Link to="/products" className=" text-teal-200 hover:text-white mr-5">
          Products
        </Link>

        {user ? (
          <button
            className="text-teal-200 hover:text-white mr-5"
            onClick={handleCustomerLogOut}
          >
            logout
            <FaPowerOff className="inline ml-1 "/>

          </button>
          
        ) : (
          <Link to="/customer_login" className="text-teal-200 hover:text-white mr-5">
            <FaUserCircle className="inline mr-1 mt-0" />
            Customer Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
