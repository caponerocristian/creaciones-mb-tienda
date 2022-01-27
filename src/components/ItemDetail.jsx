import React from 'react';
import {Card, Spinner} from "react-bootstrap";
import ItemCount from './ItemCount';

export default function ItemDetail ({producto}){
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
                <ItemCount stock={producto.stock} initial={1}/>
            </Card.Body>
</Card>
        </>
        :
        <><Spinner animation="border" variant="danger" />Cargando...</>
        }
        </>
    );
};
