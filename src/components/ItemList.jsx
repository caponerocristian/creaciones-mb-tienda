import React from 'react';
import Item from './Item';

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
            <div>Cargando...</div>
        )}
        </>
    );
}

export default ItemList;
