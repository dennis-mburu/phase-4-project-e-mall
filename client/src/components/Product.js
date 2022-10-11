import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

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
              <span className="float-right text-neutral-400">{product.username}</span>
            </p>
          </div>
          <div className="w-7/12 mx-auto">
            <p class="text-base">
              <span className="font-medium">Phone: </span>
              <span className="float-right text-neutral-400">+{product.phone}</span>
            </p>
          </div>
          <div className="w-7/12 mx-auto">
            <p class="text-base">
              <span className="font-medium">Email: </span>
              <span className="float-right text-neutral-400">{product.email}</span>
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
