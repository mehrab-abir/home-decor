import React, { useEffect, useState } from "react";
import useProductsData from "../Hooks/useProductsData";
import {
  getStoredProducts,
  removeFromWishList,
} from "../Utilities/localStorage";
import { Bounce, ToastContainer, toast } from "react-toastify";

const WishList = () => {
  const { products, loading } = useProductsData();
  const [wishList, setWishList] = useState([]);

  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const storedIds = getStoredProducts();
    const ids = storedIds.map((id) => parseInt(id));

    const wishList = products.filter((product) => ids.includes(product.id));
    setWishList(wishList);
  }, [products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleRemove = (id) => {
    removeFromWishList(id);

    setWishList((prev) => prev.filter((product) => product.id !== id));

    toast("Product removed from the wishlist");
  };

  const handleSort = (type) => {
    if (type === "asc") {
      setSortType("Low -> High");
      const sortedList = [...wishList].sort((a, b) => a.price - b.price);
      setWishList(sortedList);
    } else {
      setSortType("High -> Low");
      const sortedList = [...wishList].sort((a, b) => b.price - a.price);
      setWishList(sortedList);
    }
  };

  if (wishList.length === 0) {
    return (
      <div className="h-screen text-center">
        <p className="text-red-500 text-xl text-center mt-10">
          -Wishlist is empty-
        </p>
        <p>
          After you add product(s) to the wishlist, they will be displayed here
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-teal-600">
          Wishlist ({wishList.length})
        </h1>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-teal-600 text-white"
          >
            Sort By Price: {sortType}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-teal-900 rounded-box z-1 w-40 p-2 shadow-sm"
          >
            <li
              onClick={() => {
                handleSort("desc");
                document.activeElement.blur();
              }}
              className="my-2 cursor-pointer text-lg text-white"
            >
              High -&gt; Low
            </li>
            <li
              onClick={() => {
                handleSort("asc");
                document.activeElement.blur();
              }}
              className="my-2 cursor-pointer text-lg text-white"
            >
              Low -&gt; High
            </li>
          </ul>
        </div>
      </div>

      <div className={`${wishList.length < 4 ? "h-screen" : "h-auto"}`}>
        {wishList.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center justify-between py-2 px-4 shadow-lg border border-gray-300"
            >
              <div className="flex">
                <div className="">
                  <img src={product.image} alt="" className="w-28" />
                </div>
                <div className="pl-4">
                  <h1 className="text-xl font-bold">{product.name}</h1>
                  <p>Price: ${product.price}</p>
                  <p className="w-20 text-center px-2 bg-teal-700 text-white rounded-md mt-3">
                    {product.category}
                  </p>
                </div>
              </div>

              <button
                className="bg-red-700 py-2 px-3 text-white font-semibold rounded-lg cursor-pointer hover:bg-red-600"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
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

export default WishList;
