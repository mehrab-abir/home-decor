import React from "react";
import { Link, useOutletContext } from "react-router";
import { addToWishList } from "../Utilities/localStorage";
import { Bounce, ToastContainer, toast } from "react-toastify";

const SingleProduct = ({ product, enableHover = true }) => {
  const { name, category, price, image, id } = product;
  const { handleAddToCart } = useOutletContext();

  const handleAddToWishList = (id) => {
    addToWishList(id);

    toast("Product added to wishlist");
  };
  return (
    <div
      className={`productCard py-2 px-8 shadow-lg border border-gray-300 ${
        enableHover ? "hover:scale-105 transition-all duration-300" : ""
      }`}
    >
      <div className="px-0">
        <img src={image} alt="" className="h-[200px] w-3/4 mx-auto" />
      </div>
      <div className="mt-3 pb-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <p>Price: ${price}</p>
        <p>{category}</p>
      </div>

      <div className="mb-3">
        <div className="flex justify-between">
          <Link
            to={`/products/details/${id}`}
            className="bg-teal-700 py-1 px-2 text-white font-semibold rounded-lg cursor-pointer hover:bg-teal-600"
          >
            Details
          </Link>
          <button
            className="bg-teal-700 py-1 px-2 text-white font-semibold rounded-lg cursor-pointer hover:bg-teal-600"
            onClick={() => handleAddToWishList(id)}
          >
            + Wishlist
          </button>
        </div>

        <button
          className="bg-emerald-700 py-1 px-2 text-white font-semibold rounded-lg cursor-pointer mt-3 w-full hover:bg-emerald-600"
          onClick={() => handleAddToCart(id, price)}
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default SingleProduct;
