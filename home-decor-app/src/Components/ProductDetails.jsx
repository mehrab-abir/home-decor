import React from "react";
import { Link, useParams } from "react-router";
import useProductsData from "../Hooks/useProductsData";
import { FaArrowLeft } from "react-icons/fa6";

/*   {
    "id": 1,
    "name": "Modern Velvet Sofa",
    "category": "Furniture",
    "price": 520,
    "material": "Velvet, Wood",
    "dimensions": "84 x 35 x 33 in",
    "stock": true,
    "image": "https://i.ibb.co.com/tM7pbxwx/Modern-Velvet-Sofa.jpg",
    "description": "A cozy velvet sofa with a modern design, ideal for living rooms."
  },
 */
const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProductsData();
  // console.log(id);

  if (loading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  //   console.log(products);

  const currentProduct = products.find((product) => product.id === Number(id));
  console.log(currentProduct);
  const { name, category, price, material, image, description,dimensions } =
    currentProduct || {};
  // console.log(name)

  return (
    <div className="productCard flex flex-col md:flex-row items-start md:items-center gap-10 shadow-lg border border-gray-300 h-auto">
      <div className="px-0 w-full md:w-1/3">
        <img src={image} alt="" className="w-full p-3" />
      </div>
      <div className="p-3">
        <h1 className="text-3xl font-bold mb-3 text-emerald-600">{name}</h1>
        <p className="text-lg mb-3">{description}</p>
        <p className="text-lg font-semibold">Material: <span className="px-2 bg-amber-600 text-white rounded-md">{material}</span></p>
        <p className="text-lg font-semibold mt-2">Category: <span className="px-2 bg-teal-700 text-white rounded-md">{category}</span></p>
        <p className="text-lg font-semibold mt-2">Dimension: {dimensions}</p>
        <p className="text-2xl font-bold my-3 text-emerald-700">Price: ${price}</p>
        <Link to="/products">
        <p className="flex items-center gap-2 bg-black text-white px-2 w-20 rounded-lg"><FaArrowLeft /> Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
