import React from 'react';
import {Button, Card} from 'react-bootstrap';

function Item({props}) {
    
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {props.item.thumbnailUrl}/>
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>{props.item.descripcion}</Card.Text>
                    <Card.Text>$ {props.item.precio}</Card.Text>
                    <Button variant="primary">Ver Detalles</Button>
                </Card.Body>
            </Card> 
        </>
    )
}

export default Item;
