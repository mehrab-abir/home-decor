const getStoredProducts = () =>{
    const ids = localStorage.getItem("wishlist");

    if(ids){
        return JSON.parse(ids);
    }
    else{
        return [];
    }
}

const addToWishList = (id) =>{
    const currentList = getStoredProducts();

    if(currentList.includes(id)){
        //toast
        alert("This product already exists in the wishlist");
    }
    else{
        currentList.push(id);
        const updatedList = JSON.stringify(currentList);
        localStorage.setItem("wishlist",updatedList);
    }
}

const removeFromWishList = (delete_id) =>{
    const currentList = getStoredProducts();
    // console.log(currentList)

    const updatedList = currentList.filter(id => id !== delete_id);
    // console.log(updatedList);
    localStorage.setItem("wishlist",JSON.stringify(updatedList));
}

export {addToWishList,getStoredProducts,removeFromWishList};