import React, { useEffect, useState } from "react";
import useProductsData from "../Hooks/useProductsData";
import { getAddedProducts, removeFromCart } from "../Utilities/localStorage";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const { products, loading } = useProductsData();

  useEffect(() => {
    const currentProducts = getAddedProducts() ?? [];

    //filter out only those products that exist in the cart
    const filtered = products.filter((product) => {
      return currentProducts.some((cartItem) => cartItem.id === product.id);
    });

    //merge quantity with the filtered products object
    const merged = filtered.map((product) => {
      //find the corresponding object of 'product' in the cart, which has quantity, id and price, we need the quantity
      const matched = currentProducts.find(
        (cartItem) => cartItem.id === product.id
      );

      //make and return a new object with all keys of 'product' and a new key 'quantity'...map will push it to the 'merged' array
      return {
        ...product,
        quantity: matched.quantity,
      };
    });

    setCart(merged);
  }, [products]);

  // console.log(ids);

  const deleteProduct = (id) => {
    removeFromCart(id);

    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  useEffect(() => {
    let total = 0;
    for (const eachItem of cart) {
      total = total + eachItem.quantity * eachItem.price;
    }
    setTotalAmount(total);
  }, [cart]);

  const noProductsInCart = <div className="h-screen text-center">
        <p className="text-red-500 text-2xl text-center mt-10">
          -Cart is empty-
        </p>
      </div>

  return (
    <div>
      <h1 className="text-2xl font-bold text-teal-600 mb-5">
        Your Cart ({cart.length})
      </h1>
      {cart.map((product) => {
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
                <p>Quanity: {product.quantity}</p>
                <p className="w-20 text-center px-2 bg-teal-700 text-white rounded-md mt-3">
                  {product.category}
                </p>
              </div>
            </div>

            <button
              className="bg-red-700 py-2 px-3 text-white font-semibold rounded-lg cursor-pointer hover:bg-red-600"
              onClick={() => deleteProduct(product.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      {
        totalAmount > 0 ? <div className="mt-6 text-center">
        <p className="text-2xl font-bold">Total: ${totalAmount}</p>
      </div> : noProductsInCart
      }
      
      <Link to="/products">
        <p className="flex items-center gap-2 bg-black text-white px-2 w-42 rounded-lg mt-5">
          <FaArrowLeft /> Back to shopping
        </p>
      </Link>
    </div>
  );
};

export default Cart;
