import React, { useState} from "react";

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
        <>
        <div className="container--flex">
            <button className="btn-count" onClick={restar}>-</button>
            <span className="span-count"> {count} </span>
            <button className="btn-count" onClick={agregar}>+</button>
            <br />
        </div>
        <button className="btn-agregar" onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount
