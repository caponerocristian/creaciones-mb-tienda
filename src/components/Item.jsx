import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Item(props) {
    
    return(
        <>
            <div className='grupo item-carrito'>
            <div className='container container--flex'>
            <div class="column column--50">
                <h3 className="item-carrito__titulo">{props.item.title}</h3>
                    <img src={props.item.image} className="item-carrito__img"/>
                    <p class="item-carrito__txt">${props.item.price}</p>
                    <NavLink to={`/item/${props.item.id}`}><Button variant="danger" className='onda'>Ver Detalles!</Button></NavLink>
                </div>
            </div>
            </div>
            {/* <Card className='card'>
                <Card.Img variant="top" src={props.item.image}/>
                <Card.Body>
                    <Card.Title className='padding'>{props.item.title}</Card.Title>
                    <Card.Text className='padding'>${props.item.price}</Card.Text>
                    <NavLink to={`/item/${props.item.id}`}><Button variant="danger">Ver Detalles!</Button></NavLink>
                </Card.Body>
            </Card> */}
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.image} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>${props.item.price}</Card.Text>
                    <NavLink to={`/item/${props.item.id}`}>
                        <Button variant="danger">Ver Detalles!</Button>
                    </NavLink>
                </Card.Body>
            </Card> */}
        </>
    )
}


export default Item;
