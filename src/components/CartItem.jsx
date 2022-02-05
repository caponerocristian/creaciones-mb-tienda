import React, { useContext } from 'react';
import { cartContext } from '../contex/CartProvider';
import Table from 'react-bootstrap/Table'

function CartItem({prod}) {
    const {deleteItem} = useContext(cartContext)

    return(
        <>
            {/* <h3>{prod.item.title}</h3>
            <p>Cantidad: {prod.count}</p>
            <button className='btn-agregar' onClick={() => deleteItem(prod.item.id)}>Borrar</button> */}

        <Table striped bordered hover>
        <thead>
            <tr className='tr'>
            <th>#</th>
            <th></th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{prod.item.id}</td>
            <td><img src={prod.item.image} className='image-carrito'/></td>
            <td>{prod.item.title}</td>
            <td>{prod.count}</td>
            <td>${prod.item.price * prod.count}</td>
            <td><button className='btn-count' onClick={() => deleteItem(prod.item.id)}>X</button></td>
            </tr>
        </tbody>
        </Table>
        </> 
    );
}

export default CartItem;
