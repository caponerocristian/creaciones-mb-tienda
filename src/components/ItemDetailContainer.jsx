import React, {useEffect,useState} from 'react';
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer () {
    const { itemId} = useParams();

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
    const cargarProductos = async () =>{
        setTimeout(() => {
            ListaProductos = ListaProductos.filter(item => item.id == itemId);
            let myProducto = ListaProductos[0];
            setProducto(myProducto);
        },2000)
    }
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        cargarProductos();
    },[itemId]) 

    return(
        <>
            <ItemDetail producto={producto}/>
        </>
    );
};
