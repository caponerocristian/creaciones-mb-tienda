import React, { useContext, useState } from 'react';
import {Spinner} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { cartContext } from '../contex/CartProvider';
import ItemCount from './ItemCount';


export default function ItemDetail ({producto}){
    const {addToCart} = useContext(cartContext);
    const [itemCount, setItemCount] = useState(true);
    const [cantidad, setCantidad] = useState(null);

    function onAdd(cantidad){
        if(cantidad >=1){
            addToCart(producto, cantidad);
            setCantidad(cantidad);
            setItemCount(false);

        }
    }
    return(
        <>
        {(producto.id) ?
        <>
        <h2 className='itemDetail-titulo '>Detalle del Producto</h2>
        <div className='itemDetail'>
            <div><img src={producto.image}/></div>
            <div>
                <h2>{producto.title}</h2>
                <p>{producto.description}</p>
                <p>{producto.category}</p>
                <p>Stock: {producto.stock}</p>
                <p>${producto.price}</p>
                {
                    (itemCount) ?
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                    :
                    <Link to={"/cart"} className='btn-cart'>Ver {cantidad} productos en el carrito</Link>
                    
                }
            </div>
        </div>
        </>
        :
        <><Spinner animation="border" variant="danger" />Cargando...</>
        }
        </>
    );
};
