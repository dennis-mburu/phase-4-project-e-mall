import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { useNavigate, useParams } from "react-router-dom";

function ProductEditForm() {
  const [errors, setErrors] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/api/vendor_products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setImage_url(data.image_url);
        setStock(data.stock);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/vendor_products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        image_url,
        price,
        stock,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          navigate("/manage_products");
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center p-3 text-white text-2xl font-bold">
          EDIT PRODUCT DETAILS
        </h1>

        <div className="flex flex-col w-1/2 gap-8 flex-wrap mx-auto edit-form">
          <fieldset className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col ">
            <label htmlFor="description">Description</label>
            <textarea
              className="text-black mt-2 p-1"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col ">
            <label htmlFor="image_url">Image URL</label>
            <input
              className="text-black mt-2 h-8 p-1"
              type="text"
              name="image_url"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="stock">Stock</label>
            <input
              className="text-black mt-2 h-8 p-1"
              name="stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </fieldset>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 mt-6 w-2/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          {errors.map((error) => {
            return (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
}

export default ProductEditForm;
