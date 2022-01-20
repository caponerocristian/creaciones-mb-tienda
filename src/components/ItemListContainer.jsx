import React, {useEffect,useState} from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';

export default function ItemListContainer (props){

    let ListaProductos = [
        {
            "precio": 500,
            "id": 1,
            "title": "Café",
            "descripcion": "Descripción Cafe",
            "stock": 100,
            "thumbnailUrl": "https://picsum.photos/id/0/600"
        },
        {
            "precio": 300,
            "id": 2,
            "title": "Pizza",
            "descripcion": "Descripción Pizza",
            "stock": 50,
            "thumbnailUrl": "https://picsum.photos/id/10/600"
        },
        {
            "precio": 99,
            "id": 3,
            "title": "Agua",
            "descripcion": "Descripción Agua",
            "stock": 200,
            "thumbnailUrl": "https://picsum.photos/id/20/600"
        },
        {
            "precio": 45,
            "id": 4,
            "title": "Sandía",
            "descripcion": "Descripción Pizza",
            "stock": 100,
            "thumbnailUrl": "https://picsum.photos/id/30/600"
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
            <h1 style={{color: 'salmon', fontSize: '50px', fontWeight: '900'}}>{props.greeting}</h1>
            <ItemList itemList={itemList}/>
        </>
    );
}