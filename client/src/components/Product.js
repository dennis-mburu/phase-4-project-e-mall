import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { useNavigate } from "react-router-dom";

function Product({ items, setItems }) {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  function handleOrderClick() {
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: id }),
    }).then((r) => {
      if (r.ok) {
        setItems(items + 1);
        navigate("/cart");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <hr></hr>
      <div className="flex m-5 main-cont">
        <div className="w-2/5 mr-5 cont-left">
          <img
            className="w-full rounded-3xl max-h-[60vh] object-cover"
            alt="product"
            src={product.image_url}
          ></img>
        </div>
        <div className="w-3/5 cont-right">
          <div className="w-5/6 mx-auto border-solid border-2 border-slate-800  p-3 inner-cont">
            <h1 className="text-center font-black  text-white text-2xl">
              Product Details
            </h1>
            <hr></hr>
            <p className="font-bold mt-2 text-xl">
              Name:{" "}
              <span className="text-lg font-light text-neutral-400 ml-3">
                {product.title}
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Description:{" "}
              <span className="text-lg font-light text-neutral-400 ml-3">
                {product.description}
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Price:{" "}
              <span className="text-lg font-black text-neutral-400 ml-3">
                Ksh. {product.price}
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Stock Remaining:{" "}
              <span className="text-lg font-light text-neutral-400 ml-3">
                {product.stock}
              </span>
            </p>

            <h1 className="text-center font-black mt-3 text-white text-2xl">
              Vendor's Details
            </h1>
            <hr></hr>
            <p className="font-bold mt-2 text-xl">
              Name:{" "}
              <span className="text-lg font-light text-neutral-400 ml-3">
                {product.username}
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Phone:{" "}
              <span className="text-lg font-light text-neutral-400 ml-3">
                +{product.phone}
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Email:{" "}
              <span className="text-lg font-light text-neutral-400 ml-3">
                {product.email}
              </span>
            </p>
            <p className="font-bold mt-2 text-xl">
              Store Address:{" "}
              <span className="text-lg font-light text-neutral-400 ml-3">
                {product.address}
              </span>
            </p>
            <hr></hr>
            {errors.map((error) => {
              return (
                <div
                  className="bg-red-100 w-full mx-auto border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5 text-center"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              );
            })}
            <div className="flex justify-center">
              <button
                className='bg-green-900 w-full hover:bg-green-500 mt-8  py-2 px-4 rounded text-lg font-bold border border-white hover:border-transparent"'
                onClick={handleOrderClick}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
