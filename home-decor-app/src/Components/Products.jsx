import React, { useState } from "react";
import useProductsData from "../Hooks/useProductsData";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products, loading } = useProductsData();
  const [searchValue, setSearchValue] = useState("");

  if (loading) {
    return <p>Loading...</p>;
  }
  
  const searchInput = searchValue.trim().toLowerCase();
  const searchedProducts = searchInput ? products.filter(product => product.name.toLowerCase().includes(searchInput)) : products;

  const noProductFound = <div className="bg-gray-300 text-center p-3">
    <p>No Product Found. Try something else.</p>
  </div>

  return (
    <div className={`${searchedProducts.length === 0 ? "h-screen" : "h-auto"}`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-3">
        <div className="flex items-center justify-between py-3">
          <h1 className="text-2xl font-bold">ALL PRODUCTS <span className="text-sm text-teal-600">(Product(s) found: {searchedProducts.length})</span></h1>
        </div>
        <label className="input">
          <input type="search" onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} placeholder="Search product" />
        </label>
      </div>

    {
        searchedProducts.length >= 1 ? <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {searchedProducts.map((product) => {
          return (
            <SingleProduct
              key={product.id}
              product={product}
              enableHover={false}
            ></SingleProduct>
          );
        })}
      </div> : noProductFound
    }
      
    </div>
  );
};

export default Products;
