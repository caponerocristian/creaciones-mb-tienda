import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer () {
    const { itemId} = useParams();

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
