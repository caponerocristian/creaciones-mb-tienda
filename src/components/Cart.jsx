import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../contex/CartProvider';
import CartItem from './CartItem';
import Table from 'react-bootstrap/Table';
import TestForms from './TestForms';
function Cart() {

    const {cart, clearCart, totalPrecio} = useContext(cartContext);
    return (
        <>
        <h1 className='itemDetail-titulo '>Carrito</h1>
        {cart.length === 0 ?
            <div>
                <p>Carrito Vacio</p>
                <Link to='/' className='btn-agregar'>Ir a Inicio</Link>
                <br/>
                <br/>
            </div>
            :
            <div>
                <Table striped bordered hover className='container'>
                    <thead>
                        <tr className='tr'>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(element => <CartItem key={element.item.id} props={element} />)}
                    </tbody>
                </Table>
                <br/>
                <h1 className='totalPrecio'>Total: ${totalPrecio}</h1>
                <button className='btn-agregar' onClick={() => clearCart()}>Vaciar Carrito</button>
                <br/>
                <br/>
            </div>
        }
        <div><TestForms/></div>
    </>
    );
}

export default Cart;
