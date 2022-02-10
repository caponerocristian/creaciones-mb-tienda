import React, { createContext, useEffect, useState } from 'react';

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
    const [totalCant, setTotalCant] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    useEffect (()=>{
        let cant = 0;
        let precio = 0;
        cart.forEach(producto => (
            cant = cant + producto.count
        ));
        setTotalCant(cant);

        cart.forEach(producto => (
            precio = precio + (producto.item.price * producto.count)
        ));
        setTotalPrecio(precio);
    });

    return (
        <cartContext.Provider value={{cart, addToCart, deleteItem, clearCart, totalCant, totalPrecio}}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
