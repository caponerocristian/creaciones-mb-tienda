import React, {useEffect} from 'react';
import ItemCount from './ItemCount'
import {Card} from "react-bootstrap";
import spiderMan from './img/tienda4.jpeg';

export default function ItemListContainer ({titulo}){
    useEffect(() => {
        console.log('Se monto el componente');
            return () =>{
                console.log('Desmonto el componente');
            }
    }, []);
    return(
        <>
            <div style={{color: 'salmon', fontSize: '50px', fontWeight: '900'}}>{titulo}</div>
            <div className="justify-content-center">
                <Card className="text-center" style={{ width: '35%' }}>
                    <Card.Img variant="top" src={spiderMan}/>
                    <Card.Body>
                        <Card.Title>Spider-Man</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <ItemCount initial={1} stock={10}/>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}