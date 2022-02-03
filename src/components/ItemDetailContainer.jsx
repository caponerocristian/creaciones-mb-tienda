import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer () {
    const { itemId} = useParams();

    let ListaProductos = [
        {
            "price": 100,
            "id": 1,
            "title": "Cariñosos",
            "description": "Caja Pochoclera",
            "category": "Caja",
            "stock": 100,
            "image": "/img/tienda1.jpeg"
        },
        {
            "price": 200,
            "id": 2,
            "title": "Stick",
            "description": "Etiquetas para lapices x 20",
            "category": "Etiquetas",
            "stock": 50,
            "image": "/img/tienda2.jpeg"
        },
        {
            "price": 100,
            "id": 3,
            "title": "Mikey",
            "description": "Caja Golosinera",
            "category": "Caja",
            "stock": 200,
            "image": "/img/tienda3.jpeg"
        },
        {
            "price": 200,
            "id": 4,
            "title": "Spider-Man",
            "description": "Envoltorio para chocolates x 30",
            "category": "Etiquetas",
            "stock": 20,
            "image": "/img/tienda4.jpeg"
        },
        {
            "price": 100,
            "id": 5,
            "title": "Unicornio",
            "description": "Caja Pochoclera",
            "category": "Caja",
            "stock": 40,
            "image": "/img/tienda5.jpeg"
        },
        {
            "price": 200,
            "id": 6,
            "title": "Pandas",
            "description": "Etiquetas para lapices x 20",
            "category": "Etiquetas",
            "stock": 150,
            "image": "/img/tienda6.jpeg"
        },
        {
            "price": 100,
            "id": 7,
            "title": "Conejo",
            "description": "Caja Pochoclera",
            "category": "Caja",
            "stock": 300,
            "image": "/img/tienda7.jpeg"
        },
        {
            "price": 200,
            "id": 8,
            "title": "Car",
            "description": "Etiquetas para lapices x 20",
            "category": "Etiquetas",
            "stock": 100,
            "image": "/img/tienda8.jpeg"
        }
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
