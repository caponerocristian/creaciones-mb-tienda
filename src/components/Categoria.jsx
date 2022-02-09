import React, {useEffect,useState} from 'react';
import { useParams} from 'react-router-dom';
import Item from './Item';
import {Spinner} from "react-bootstrap";
import { getFirestore } from '../firebase/Firebase';

function Categoria() {
    const {categoriaId} = useParams();

    /* let ListaProductos = [
        {
            "price": 100,
            "id": 1,
            "title": "Simones",
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
    ]; */
    const [producto, setProducto] = useState({});
    useEffect(() =>{
        const db = getFirestore();
        const itemCollection = db.collection("items").where('category', '==', categoriaId);

        itemCollection.get()
        .then((querySnapShot) => {
            if(querySnapShot.size == 0) {
                console.log('no hay documentos con ese query');
                return
            }
            console.log('hay documentos');

            setProducto(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));

        })
        .catch((err) => {
            console.log(err);
        })
    }, [categoriaId])

    /*  useEffect(()=>{
        setTimeout(()=>{
            setProducto(ListaProductos.filter(item => item.category == categoriaId));
        },2000);
        
    },[categoriaId])  */

    return (
        <>
        <h2 className='itemDetail-titulo '>Categorias</h2>
        {producto.length > 0 ? (
        <div className="container--flex">
            {producto.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
        ) : (
            <div className='tr'><Spinner animation="border" variant="danger" /> Cargando...</div>
        )}
        </>
    );
}

export default Categoria;
