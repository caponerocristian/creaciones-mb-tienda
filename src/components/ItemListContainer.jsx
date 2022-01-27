import React, {useEffect,useState} from 'react';
import ItemList from './ItemList';

export default function ItemListContainer (props){

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

    const [itemList, setItemList] = useState([]);

    const cargarProductos = new Promise((resolve, reject)  => {
        setTimeout(()=>{
            resolve(ListaProductos);
        }, 2000);
    });

    useEffect(() => {
        cargarProductos.then((res) =>{
            setItemList(res);
        });
    }, []);

    return(
        <>
            <h1 className='titulo-h1'>{props.greeting}</h1>
            <ItemList itemList={itemList}/>
        </>
    );
}