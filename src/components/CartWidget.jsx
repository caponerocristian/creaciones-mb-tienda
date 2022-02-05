import React, { useContext } from "react";
import { cartContext } from '../contex/CartProvider';

export default function CartWidget () {
    const {totalCant} = useContext(cartContext); 
    return(
        <>
            {
                (totalCant > 0 )?
                    <i className="far fa-shopping-cart icono"><span className='badge'>{totalCant}</span></i>
                :
                <p></p>
            }
        </>
    );
}