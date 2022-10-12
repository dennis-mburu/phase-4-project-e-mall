import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { useNavigate } from "react-router-dom";

function Product() {
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
        // console.log(data);
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
        alert("Product Added To Cart");
        navigate("/cart");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  // console.log(errors);

  return (
    <>
      <h1 className="text-center p-3  text-white text-3xl">
        {product.title}: Ksh. {product.price}
      </h1>
      <hr></hr>
      <div className="flex m-5 main-cont">
        <div className="w-2/5 mr-5 cont-left">
          <img
            className="w-full rounded-3xl max-h-[60vh] object-cover"
            alt="product"
            src={product.image_url}
          ></img>
          <div className="flex justify-center">
            <button
              className=" bg-teal-200 hover:bg-blue-600 mt-6  mx-auto text-black font-medium py-2 px-4 rounded-full"
              onClick={handleOrderClick}
            >
              Add to Cart
            </button>
          </div>
          {errors.map((error) => {
            // return (
            //   <h1 key={error} className="text-red-500 text-center mt-3 text-xl">
            //     {error}
            //   </h1>
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
        </div>
        <div className="w-3/5 cont-right">
          <h1 className="text-center p-3  text-white text-2xl">DESCRIPTION:</h1>
          <p className="text-center text-neutral-400">{product.description}</p>

          <h1 className="text-center p-3  text-white text-2xl">
            Stock Remaining:
          </h1>
          <p className="text-center text-neutral-400 text-xl">
            {product.stock}
          </p>

          <h1 className="text-center p-3  text-white text-2xl">
            Vendor contacts:
          </h1>

          <div className="w-7/12 mx-auto">
            <p class="text-base">
              <span className="font-medium">Name: </span>
              <span className="float-right text-neutral-400">
                {product.username}
              </span>
            </p>
          </div>
          <div className="w-7/12 mx-auto">
            <p class="text-base">
              <span className="font-medium">Phone: </span>
              <span className="float-right text-neutral-400">
                +{product.phone}
              </span>
            </p>
          </div>
          <div className="w-7/12 mx-auto">
            <p class="text-base">
              <span className="font-medium">Email: </span>
              <span className="float-right text-neutral-400">
                {product.email}
              </span>
            </p>
          </div>
          <h1 className="text-center p-3  text-white text-2xl">
            Physical Store Address:
          </h1>
          <p className="text-center text-neutral-400 text-xl">
            {product.address}
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;
