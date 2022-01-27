import React, {useEffect,useState} from 'react';
import { useParams} from 'react-router-dom';
import Item from './Item';
import {Spinner} from "react-bootstrap";

function Categoria() {
    const {categoriaId} = useParams();

    let ListaProductos = [
        {
            "price": 50,
            "id": 1,
            "title": "Mikey",
            "description": "Caja Pochoclera",
            "category": "Caja",
            "stock": 100,
            "image": "/img/carrusel1.jpeg"
        },
        {
            "price": 80,
            "id": 2,
            "title": "Simones",
            "description": "Etiquetas para lapices x 20",
            "category": "Etiquetas",
            "stock": 50,
            "image": "/img/galeria3.jpeg"
        },
        {
            "price": 100,
            "id": 3,
            "title": "Unicornio",
            "description": "Caja Golosinera",
            "category": "Caja",
            "stock": 200,
            "image": "/img/galeria5.jpeg"
        },
        {
            "price": 70,
            "id": 4,
            "title": "Mikey",
            "description": "Envoltorio para chocolates x 30",
            "category": "Etiquetas",
            "stock": 100,
            "image": "/img/galeria7.jpeg"
        },
    ];
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        setTimeout(()=>{
            setProducto(ListaProductos.filter(item => item.category == categoriaId));
        },2000);
        
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
