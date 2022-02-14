import React, { useEffect, useState, useRef, useContext } from 'react';
import firebase from 'firebase';
import { getFirestore } from '../firebase/Firebase';
import { cartContext } from '../contex/CartProvider';

function TestForms() {
    const {cart, totalPrecio, clearCart} = useContext(cartContext);
    const [orderId, setOrderId] = useState('');
    const [finalizarCompra, setFinalizarCompra] = useState(true);
    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();

    function handleClick(){
        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrder = {
            buyer: {
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                address: addressRef.current.value,
                email: emailRef.current.value,
                city: cityRef.current.value,
            },
            items: cart,
            total: totalPrecio,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

            orders.add(miOrder)
                .then(({id}) => {
                    console.log('orden ingresada: ' + id);
                    setOrderId(id);
                })
                .catch((err) => {
                    console.log(err);
                });

                clearCart();
                setFinalizarCompra(false);
    }
    return (
        
            <>
                {finalizarCompra ?
                <>
                <h2 className='itemDetail-titulo '>Contacto</h2>
                <form onSubmit={(event) => event.preventDefault()} className='container form-seccion form-centrado'>
                    <fieldset>
                        <legend>Informacion Personal</legend>
                        <label>Nombre y Apellido:</label>
                        <input type="text" name='name' ref={nameRef} placeholder="Ingrese su Nombre y Apellido" required/>
                        <br/>
                        <label>Dirección:</label>
                        <input type="text" name='address' ref={addressRef} placeholder="Ingrese su dirección" required/>
                        <br/>
                        <label>Ciudad:</label>
                        <input type="text" name='city' ref={cityRef} placeholder="Ingrese su ciudad" required/>
                        <br/>
                        <label>E-mail:</label>
                        <input type="email" name="email" ref={emailRef} placeholder="Ingrese su correo electronico" required/>
                        <br/>
                        <label>Teléfono:</label>
                        <input type="tel" name='phone' ref={phoneRef} placeholder="Ingrese su teléfono" required/>
                        <br/>
                        <button type='submit' onClick={()=> handleClick()} className="btn-cart ">Enviar</button>
                    </fieldset>
                </form>
                </>
                :
                <div>
                    <h3>Gracias por su compra, su numero de orden es: {orderId}</h3>
                </div>
                
                }
                
            </>
    )
}

export default TestForms