import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ items, setItems }) {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setItems(data.length);
      });
  }, []);

  function handleRemoveFromCart(id) {
    fetch(`/api/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cart.filter((order) => order.id !== data.id);
        setCart(updatedCart);
        setItems(items - 1);
      });
  }

  if (cart.length === 0)
    return (
      <>
        <div className="text-center">
          <img
            className="mx-auto my-20 w-2/5 max-w-sm"
            src={require("../assets/cart.png")}
            alt="empty cart"
          />
          <h1 className="text-2xl">Your Cart is Currently Empty</h1>
          <button
            className='bg-transparent hover:bg-blue-500 mt-5  py-2 px-4 border border-blue-500 hover:border-transparent rounded"'
            onClick={() => navigate("/")}
          >
            Start Shopping
          </button>
        </div>
      </>
    );

  return (
    <>
      <h1 className="text-center p-3 text-white text-xl font-bold">
        ITEMS CURRENTLY IN CART
      </h1>
      <div className="overflow-x-auto relative dark">
        <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
          <thead className="text- text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product Image
              </th>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Product Price
              </th>
              <th scope="col" className="py-3 px-6">
                Remove Product
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((order) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-[100px] h-20 rounded-md object-cover ml-5"
                    src={order.product_image}
                    alt="product"
                  ></img>
                </th>
                <td className="py-4 px-6">{order.product_title}</td>
                <td className="py-4 px-6">{order.product_price}</td>
                <td className="py-4 px-6">
                  <button
                    className=" bg-red-800 text-white hover:bg-red-900 mt-5  py-2 px-4 border border-red-400 hover:border-transparent rounded"
                    onClick={() => handleRemoveFromCart(order.id)}
                  >
                    Remove from Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
