import React, { useContext } from 'react';
import { cartContext } from '../contex/CartProvider';

function CartItem({ props }) {
    const {deleteItem, cart} = useContext(cartContext);

    return(
        <>
            <tr>
                <td><img src={props.item.image} className='image-carrito'/></td>
                <td>{props.item.title}</td>
                <td>{props.count}</td>
                <td>${props.item.price}</td>
                <td>${props.item.price * props.count}</td>
                <td><button className='btn-count' onClick={() => deleteItem(props.item.id)}>X</button></td>
            </tr>
        </> 
    );
}

export default CartItem;
