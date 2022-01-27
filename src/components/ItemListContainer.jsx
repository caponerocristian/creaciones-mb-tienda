import React, {useEffect,useState} from 'react';
import ItemList from './ItemList';

export default function ItemListContainer (props){

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