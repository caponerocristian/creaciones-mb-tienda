import React, {useEffect,useState} from 'react';
import { useParams} from 'react-router-dom';
import Item from './Item';
import {Spinner} from "react-bootstrap";
import { getFirestore } from '../firebase/Firebase';

function Categoria() {
    const {categoriaId} = useParams();

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
