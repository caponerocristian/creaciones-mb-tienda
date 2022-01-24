import React from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ItemCount from './ItemCount';

export default function ItemDetail ({producto}){
    // return (
    //     <>
    //     {(props.ItemDetail.lenght > 0) ?
    //     <>
    //     <Container>
    //         <Row>
    //             <Col sm={4}>
    //                 <Card style={{ width: '18rem' }}>
    //                     <Card.Img variant="top" src={props.item.image}/>
    //                 </Card>
    //             </Col>
    //             <Col sm={8}>
    //                 <Card style={{ width: '18rem' }}>
    //                     <Card.Body>
    //                         <Card.Title>{props.item.title}</Card.Title>
    //                         {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    //                         <Card.Text>{props.item.description}</Card.Text>
    //                         <Card.Text>{props.item.category}</Card.Text>
    //                         <Card.Text>{props.item.stock}</Card.Text>
    //                         <Card.Text>$ {props.item.price}</Card.Text>
    //                         <ItemCount stock={props.item.stock} initial={1}/>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //         </Row>
    //     </Container>
    //     </>
    //     :
    //     <>Cargando...</>
    //     }
    //     </>
    // );
    return(
        <>
        {(producto.id > 0) ?
        <>
       {/*  <Container>
            <Row>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.image}/>
                    </Card>
                </Col>
                <Col sm={8}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>{producto.description}</Card.Text>
                            <Card.Text>{producto.category}</Card.Text>
                            <Card.Text>{producto.stock}</Card.Text>
                            <Card.Text>${producto.price}</Card.Text>
                            <ItemCount stock={producto.stock} initial={1}/>
                        </Card.Body>
                    </Card>
            </Col>
            </Row>
        </Container> */}
        <Card style={{ width: '18rem', marginTop: '10px' }}>
            <Card.Img variant="top" src={producto.image} />
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
        <>Cargando...</>
        }
        </>
    );
};
