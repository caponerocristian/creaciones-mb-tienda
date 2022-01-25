import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Item(props) {
    
    return(
        <>
            <Card className='card'>
                <Card.Img variant="top" src={props.item.image}/>
                <Card.Body>
                    <Card.Title className='padding'>{props.item.title}</Card.Title>
                    <Card.Text className='padding'>${props.item.price}</Card.Text>
                    <NavLink to={`/item/${props.item.id}`}><Button variant="danger">Ver Detalles!</Button></NavLink>
                </Card.Body>
            </Card>
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
