import React, { useContext } from "react";
import { cartContext } from '../contex/CartProvider';

export default function CartWidget () {
    const {countProduct} = useContext(cartContext);
    return(
        <>
            <i class="far fa-shopping-cart icono"><span className='badge'>{countProduct}</span></i>
        </>
    );
}