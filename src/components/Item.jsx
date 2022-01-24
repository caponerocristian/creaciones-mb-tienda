import React from 'react';
import { Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Item(props) {
    
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.image} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>${props.item.price}</Card.Text>
                    <NavLink to={`/item/${props.item.id}`} style={{textDecoration:'none', background: "salmon", color: 'black', padding: '5px', borderRadius: '5px'}}>
                        Ver Detalles
                    </NavLink>
                </Card.Body>
            </Card>
        </>
    )
}


export default Item;
