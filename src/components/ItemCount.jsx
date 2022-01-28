import React, { useState} from "react";
import {Button} from "react-bootstrap";

function ItemCount({initial, stock, onAdd}) {
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
    return (
        <div className="justify-content-center">
            <Button variant="primary" onClick={restar}>-</Button>
            <span> {count} </span>
            <Button variant="primary" onClick={agregar}>+</Button>
            <br />
            <br />
            <Button variant="success" onClick={()=>onAdd(count)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
