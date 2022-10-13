import React, { useState } from "react";
// import "./LoginForm.css"


function ProductEditForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image_url, setImage_url] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  return (
    <>
      <form>
        <h1 className="text-center p-6 text-4xl font-medium">
          Edit Product Details
        </h1>

        <div className="flex flex-col w-1/2 gap-8 flex-wrap mx-auto edit-form">
          <fieldset className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              className="text-black mt-2 h-8"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              className="text-black mt-2 "
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              className="text-black mt-2 h-8"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col ">
            <label htmlFor="image_url">Image URL</label>
            <input
              className="text-black mt-2 h-8"
              type="text"
              name="image_url"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="stock">Stock</label>
            <input
              className="text-black mt-2 h-8"
              name="stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </fieldset>

          <button type="submit" class="bg-blue-500 hover:bg-blue-700 mt-6 w-2/3 mx-auto text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        </div>
      </form>
    </>
  );
}

export default ProductEditForm;
