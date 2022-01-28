import React, { useState } from 'react';
import {Card, Spinner, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


export default function ItemDetail ({producto}){
    const [itemCount, setItemCount] = useState(true);
    const [cantidad, setCantidad] = useState(null);

    function onAdd(cantidad){
        if(cantidad >=1){
            setCantidad(cantidad);
            setItemCount(false);

        }
    }
    return(
        <>
        {(producto.id > 0) ?
        <>
        <h2 className='itemDetail-titulo '>Detalle del Producto</h2>
        <Card style={{ width: '20rem', marginTop: '10px', marginBottom: '10px' }}>
            <Card.Img variant="top" src={producto.image} className='item-carrito__img'/>
            <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>{producto.category}</Card.Text>
                <Card.Text>Stock: {producto.stock}</Card.Text>
                <Card.Text>${producto.price}</Card.Text>
                {
                    (itemCount) ?
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                    :
                    <Link to={"/cart"}><Button variant="danger" className='onda'>Ver {cantidad} productos en el carrito</Button></Link>
                    
                }
                
            </Card.Body>
</Card>
        </>
        :
        <><Spinner animation="border" variant="danger" />Cargando...</>
        }
        </>
    );
};
