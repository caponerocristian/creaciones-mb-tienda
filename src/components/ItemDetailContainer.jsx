import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore } from '../firebase/Firebase';

export default function ItemDetailContainer () {
    
    const { itemId} = useParams();
    const [producto, setProducto] = useState({});
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc(itemId);
        miItem.get()
            .then((doc) => {
                if(!doc.exists) {
                    console.log('no existe ese documento');
                    return
                }
                setProducto({ id: doc.id, ...doc.data() });
                console.log(doc.data());
            })
            .catch((err) =>{
                console.log(err);
            });
    }, []);

    return(
        <>
            <ItemDetail producto={producto}/>
        </>
    );
};
