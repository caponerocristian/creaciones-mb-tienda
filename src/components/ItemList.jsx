import React from 'react';
import Item from './Item';
import { Spinner } from "react-bootstrap";


function ItemList(props) {
    
    return(
        <>
        <div>
        {props.itemList.length > 0 ? (
        <div className="container--flex">
            {props.itemList.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
        ) : (
            <div className='tr'>
                <Spinner animation="border" variant="danger"/> Cargando...
            </div>
        )}
        </div>
        </>
    );
}

export default ItemList;
