const getStoredProducts = () => {
    const ids = localStorage.getItem("wishlist");

    if (ids) {
        return JSON.parse(ids);
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {
    const currentList = getStoredProducts();

    if (currentList.includes(id)) {
        //toast
        alert("This product already exists in the wishlist");
    }
    else {
        currentList.push(id);
        const updatedList = JSON.stringify(currentList);
        localStorage.setItem("wishlist", updatedList);
    }
}

const removeFromWishList = (delete_id) => {
    const currentList = getStoredProducts();
    // console.log(currentList)

    const updatedList = currentList.filter(id => id !== delete_id);
    // console.log(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
}

const getAddedProducts = () => {
    const ids = localStorage.getItem("cart");

    if (ids) {
        return JSON.parse(ids);
    }
    else {
        return [];
    }
}

const addToCart = (id, price) => {
    const currentProducts = getAddedProducts();

    const duplicate = currentProducts.some(product => product.id === id);
    // console.log(duplicate)

    let quantity = 1; //for new product,,duplicate checking later

    if (duplicate) {
        const index = currentProducts.findIndex(p => p.id === id)
        // console.log(index)
        // console.log("quantity:", currentProducts[index].quantity)

        quantity = currentProducts[index].quantity;
        //storing the current quantity first

        //removing the product from the list
        currentProducts.splice(index, 1);

        //increment quantity by 1 as it already exists
        quantity += 1;
    }

    //make new object with updated quantity, if it was new, quantity will be 1, otherwise whatever the updated quantity is
    const newProduct = {
        id: id,
        price: price,
        quantity: quantity
    }
    currentProducts.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(currentProducts));

    window.dispatchEvent(new Event("storage"));
}

const removeFromCart = (id) => {
    const currentCart = getAddedProducts();

    const updatedCart = currentCart.filter(product => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Notify Navbar (and others) that the cart changed
    window.dispatchEvent(new Event("storage"));
};


export { addToWishList, getStoredProducts, removeFromWishList, addToCart, getAddedProducts, removeFromCart };