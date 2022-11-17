import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";


function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-center p-3 text-white text-xl font-black">
        ALL AVAILABLE PRODUCTS
      </h1>
      <div className="mx-8 pb-8" >
      <Grid container spacing={5} >
        
        {/* <div className="flex flex-wrap gap-8 justify-evenly  p-4 font-bold"> */}
        {products.map((product) => (
          <Grid item xs={12} sm={6}  md={4} lg={3}>
            <div
              className=" rounded-xl overflow-hidden shadow-2xl bg-[#1F2937]"
              key={product.id}
            >
              <img
                className="w-full h-80 object-cover"
                src={product.image_url}
                alt="Product"
              ></img>
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">{product.title}</div>
                <div className="w-9/12 mx-auto">
                  <p className="text-center ">Ksh. {product.price}</p>
                </div>
                <div className="flex justify-center">
                  <button
                    className=" bg-purple-900 hover:bg-purple-600 mt-5  py-2 px-4 border border-purple-300 hover:border-transparent rounded"
                    onClick={() => navigate(`/view_product/${product.id}`)}
                  >
                    Explore Product
                  </button>
                </div>
              </div>
            </div>
          </Grid>
        ))}
        {/* </div> */}
      </Grid>
      </div>

    </>
  );
}

export default Products;
