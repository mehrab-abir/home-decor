import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router";
import Footer from "./Footer";
import { addToCart, getAddedProducts } from "../Utilities/localStorage";
import { FaShoppingCart } from "react-icons/fa";

const Root = () => {

  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  // Load cart once and refresh whenever localStorage "cart" changes
  useEffect(() => {
    const updateCart = () => {
      const stored = getAddedProducts() ?? [];
      setCart(stored);
    };

    updateCart(); // initial load
    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  //count total items from quantities
  useEffect(() => {
    let totalItems = 0;
    for (const product of cart) {
      totalItems = totalItems + (product.quantity || 0);
    }
    setCartLength(totalItems);
  }, [cart]);

  const handleAddToCart = (id, price) => {
    addToCart(id, price);
    const currentProducts = getAddedProducts();
    setCart(currentProducts);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[90%] mx-auto pt-28 mb-6">
        <Link
          to="/cart"
          className="flex items-center justify-center w-16 md:w-18 bg-emerald-600 rounded-md mr-1 fixed right-0 z-50"
        >
          <FaShoppingCart className="text-2xl text-white" />
          <span className="text-xl text-white font-semibold ml-2">
            {cartLength}
          </span>
        </Link>
        <Outlet context={{ handleAddToCart }}></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
