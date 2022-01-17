import React, { useState} from "react";
import swal from "sweetalert";
import {Button} from "react-bootstrap";

function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial);

    function agregar(){
        const valor = count + 1;
        if(valor <= stock){
            setCount(valor);
        }
    }
    function restar() {
        const valor = count - 1;
        if (valor >= initial) {
            setCount(valor);
        }
    }
    function onAdd(){
        swal(`Se han agregado ${count} producto/s al carrito!`);
    }
    return (
        <div className="justify-content-center">
            <Button variant="primary" onClick={restar}>-</Button>
            <span> {count} </span>
            <Button variant="primary" onClick={agregar}>+</Button>
            <br />
            <br />
            <Button variant="success" onClick={onAdd}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
