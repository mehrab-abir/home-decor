import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed w-full py-6 z-50">
      <div className="w-[90%] mx-auto flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/" className="text-lg mt-3">
                Home
              </NavLink>
              <NavLink to="/products" className="text-lg mt-3">
                Products
              </NavLink>
              <NavLink to="/wishlist" className="text-lg mt-3">
                Wishlist
              </NavLink>
            </ul>
          </div>
          <Link to='/' className="text-3xl font-bold text-emerald-700">HomeDecor</Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal hidden lg:flex">
            <NavLink to="/" className="text-lg ml-6">
              Home
            </NavLink>
            <NavLink to="/products" className="text-lg ml-6">
              Products
            </NavLink>
            <NavLink to="/wishlist" className="text-lg ml-6">
              Wishlist
            </NavLink>
          </ul>
          <a className="btn bg-teal-700 text-white">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
