import React from 'react';
import useProductsData from '../Hooks/useProductsData';
import SingleProduct from './SingleProduct';

const Products = () => {
    const {products,loading} = useProductsData();

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div className=''>
            <div className='flex items-center justify-between py-3'>
                <h1 className="text-2xl font-semibold">All Products</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    products.map(product => {
                        return <SingleProduct key={product.id} product={product} enableHover={false}></SingleProduct>
                    })
                }
            </div>
        </div>
    );
};

export default Products;