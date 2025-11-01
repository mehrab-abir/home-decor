import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { addToCart, getAddedProducts } from '../Utilities/localStorage';

const Root = () => {
    const [cartProducts, setCartProducts] = useState([]);

    const handleAddToCart = (id,price) =>{
        addToCart(id,price);

        const currentProducts = getAddedProducts();
        const updatedCart = [...currentProducts];
        // console.log(updatedCart)
        setCartProducts(updatedCart);
    }
    // console.log(cartProducts)

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-[90%] mx-auto pt-28 mb-6'>
                <Outlet context={{handleAddToCart}}></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;