import React, {useEffect,useState} from 'react';
import { useParams} from 'react-router-dom';
import Item from './Item';
import {Spinner} from "react-bootstrap";

function Categoria() {
    const {categoriaId} = useParams();

    let ListaProductos = [
        {
            "price": 500,
            "id": 1,
            "title": "Café",
            "description": "Descripción Cafe",
            "category": "Caja",
            "stock": 100,
            "image": "https://picsum.photos/id/0/600"
        },
        {
            "price": 300,
            "id": 2,
            "title": "Pizza",
            "description": "Descripción Pizza",
            "category": "Etiquetas",
            "stock": 50,
            "image": "https://picsum.photos/id/10/600"
        },
        {
            "price": 99,
            "id": 3,
            "title": "Agua",
            "description": "Descripción Agua",
            "category": "Caja",
            "stock": 200,
            "image": "https://picsum.photos/id/20/600"
        },
        {
            "price": 45,
            "id": 4,
            "title": "Sandía",
            "description": "Descripción Pizza",
            "category": "Etiquetas",
            "stock": 100,
            "image": "https://picsum.photos/id/30/600"
        },
    ];
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        setProducto(ListaProductos.filter(item => item.category == categoriaId));
    },[categoriaId]) 

    return (
        <>
        <h2 className='itemDetail-titulo '>Categorias</h2>
        {producto.length > 0 ? (
        <div className="d-flex">
            {producto.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
        ) : (
            <div><Spinner animation="border" variant="danger" />Cargando...</div>
        )}
        </>
    );
}

export default Categoria;
