import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaTools } from "react-icons/fa";

function ManageProducts() {
  const [errors, setErrors] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState(1);

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/vendor_products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  function handleDeleteProduct(id) {
    fetch(`/api/vendor_products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = products.filter(
          (product) => product.id !== data.id
        );
        setProducts(updatedProducts);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/vendor_products", {
      method: "POST",
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
          setProducts([...products, data]);
          navigate("/manage_products");
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <h1 className="text-center p-3 text-white text-2xl font-bold">
        PRODUCTS THAT YOU CURRENTLY SELL
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
                Stock
              </th>
              <th scope="col" className="py-3 px-6">
                Edit Product
              </th>
              <th scope="col" className="py-3 px-6">
                Remove Product
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-[100px] h-20 rounded-md object-cover ml-5"
                    src={product.image_url}
                    alt="product"
                  ></img>
                </th>
                <td className="py-4 px-6">{product.title}</td>
                <td className="py-4 px-6 ">{product.price}</td>
                <td className="py-4 px-6 ">{product.stock}</td>
                <td className="py-4 px-6 ">
                  <button
                    className=" bg-blue-800 text-white text-center hover:bg-blue-500 mt-5 ml-5  py-2 px-4 border border-red-400 hover:border-transparent rounded"
                    onClick={() => navigate(`/product_edit/${product.id}`)}
                  >
                    <FaTools />
                  </button>
                </td>

                <td className="py-4 px-6">
                  <button
                    className=" bg-red-800 text-white text-center hover:bg-red-900 mt-5 ml-5  py-2 px-4 border border-red-400 hover:border-transparent rounded"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={handleSubmit}>
        <h1 className="text-center p-3 text-white text-2xl font-bold">
          ADD A NEW PRODUCT
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

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 my-6 w-2/3 mx-auto text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ManageProducts;
