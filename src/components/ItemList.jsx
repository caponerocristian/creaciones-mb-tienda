import React from 'react';
import Item from './Item';
import { Spinner } from "react-bootstrap";


function ItemList(props) {
    
    return(
        <>
        {props.itemList.length > 0 ? (
        <div className="d-flex">
            {props.itemList.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
        ) : (
            <div>
                <Spinner animation="border" variant="danger" /> Cargando...
            </div>
        )}
        </>
    );
}

export default ItemList;
