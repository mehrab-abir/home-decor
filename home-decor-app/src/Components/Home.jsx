import React from 'react';
import useProductsData from '../Hooks/useProductsData';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
import SingleProduct from './SingleProduct';

const Home = () => {
    const {products,loading} = useProductsData();

    if(loading){
        return <p>Loading ....</p>
    }

    // console.log(products);

    const featuredProducts = products.slice(0,6);

    return (
        <div className=''>
            <div className='flex items-center justify-between py-3'>
                <h1 className="text-2xl font-semibold">Featured Products</h1>
                <Link to='/products' className='flex items-center gap-3 cursor-pointer'>
                    <h1 className="text-2xl font-semibold text-teal-700">See All Products</h1>
                    <FaArrowRight className='text-xl' />
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    featuredProducts.map(product => {
                        return <SingleProduct key={product.id} product={product} enableHover></SingleProduct>
                    })
                }
            </div>
        </div>
    );
};

export default Home;