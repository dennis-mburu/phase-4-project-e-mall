import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageProducts() {
  const navigate = useNavigate();


  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/api/vendor_products")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(data)})
      console.log(products)
  }, [])

  return (
    <>
      <div>Manage My Products</div>
    </>
  );
}

export default ManageProducts;
