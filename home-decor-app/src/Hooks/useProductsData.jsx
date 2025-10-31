import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useProductsData = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        axios('/furnitureData.json')
        .then(data => setProducts(data.data))
        .catch(err => console.log(err))
        .finally(setLoading(false))
    },[])

    return {products,loading};
};

export default useProductsData;