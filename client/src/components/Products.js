import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-center p-3 text-white text-xl font-bold">
        ALL AVAILABLE PRODUCTS
      </h1>
      <div className="flex flex-wrap gap-8 justify-evenly  p-4">
        {products.map((product) => (
          <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-[#1F2937]">
            <img
              className="w-full h-80 object-cover"
              src={product.image_url}
              alt="Product"
            ></img>
            <div className="px-6 py-4">
              <div className="font-medium text-xl mb-2 text-center">
                {product.title}
              </div>
              <div className="w-9/12 mx-auto">
                <p className="text-base">
                  <span className="font-medium">Price: </span>
                  <span className="float-right">Ksh. {product.price}</span>
                </p>

              </div>
              <div className="flex justify-center" >
              {/* <button className=" bg-teal-200 hover:bg-blue-600 mt-6  mx-auto text-black font-medium py-2 px-4 rounded-full" onClick={() => navigate(`/view_product/${product.id}`)}>
                  Explore Product
                </button> */}
                <button className=" bg-transparent hover:bg-blue-500 mt-5  py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => navigate(`/view_product/${product.id}`)}>
                  Explore Product
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
