import React, { createContext, useState } from 'react';

export const cartContext = createContext();

function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addToCart = (producto, count) => {
        if(isInCart(producto.id)){
            const indexItem = cart.findIndex(ele => ele.item.id === producto.id);
            cart[indexItem].count = cart[indexItem].count + count;
            setCart([...cart]);
        } else {
            setCart([...cart, {item: producto, count}]);
        }
    }

    const deleteItem = (id) => {
        const updateCart = cart.filter(element => element.item.id !== id);
        setCart(updateCart);
    }

    const isInCart = (id) => {
        return cart.some(element => element.item.id === id);
    }

    const clearCart = () => {
        setCart([])
    }

    const countProduct = () =>{
        return cart.reduce((accum, item)=> accum = accum + item.count, 0);
    }

    return (
        <cartContext.Provider value={{cart, addToCart, deleteItem, clearCart, countProduct}}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
