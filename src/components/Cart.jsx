import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../contex/CartProvider';
import CartItem from './CartItem';

function Cart() {

    const {cart, clearCart} = useContext(cartContext);
    return (
        <>
        <h1 className='itemDetail-titulo '>Carrito</h1>
        {cart.length === 0 ?
            <div>
                <p>Carrito Vacio</p>
                <Link to='/' className='btn-agregar'>Ir a Inicio</Link>
            </div>
            :
            <div>
                {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
                <br/>
                <button className='btn-agregar' onClick={() => clearCart()}>Vaciar Carrito</button>
            </div>
        }
    </>
    );
}

export default Cart;
