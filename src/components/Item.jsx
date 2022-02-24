import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
    
    return(
        <>
            <div className='item'>
                <img src={props.item.image} alt='product image' className='item-carrito__img'/>
                <div>
                    <h3 className='item-carrito__titulo'>{props.item.title}</h3>
                    <p className='item-carrito__txt'>${props.item.price}</p>
                    <Link className='btn-tienda' to={`/item/${props.item.id}`}>Ver Detalles!</Link>
                </div>
            </div>
        </>
    )
}


export default Item;
