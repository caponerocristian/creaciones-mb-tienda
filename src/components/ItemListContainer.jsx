import React, {useEffect,useState} from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';

export default function ItemListContainer ({titulo}){

    let ListaProductos = [
        {
            "precio": 500,
            "id": 1,
            "title": "Café",
            "descripcion": "Descripcion Cafe",
            "stock": 100,
            "thumbnailUrl": "https://picsum.photos/id/0/600"
        },
        {
            "precio": 300,
            "id": 2,
            "title": "Pizza",
            "descripcion": "Descripcion Pizza",
            "stock": 50,
            "thumbnailUrl": "https://picsum.photos/id/10/600"
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
            <div style={{color: 'salmon', fontSize: '50px', fontWeight: '900'}}>{titulo}</div>
            <ItemList itemList={itemList}/>
        </>
    );
}