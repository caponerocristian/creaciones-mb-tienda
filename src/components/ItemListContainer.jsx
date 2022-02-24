import React, {useEffect,useState} from 'react';
import ItemList from './ItemList';
import { getFirestore } from '../firebase/Firebase';

export default function ItemListContainer (props){

    const [itemList, setItemList] = useState([]);
    useEffect(() =>{
        const db = getFirestore();
        const itemCollection = db.collection("items")

        itemCollection.get()
        .then((querySnapShot) => {
            if(querySnapShot.size == 0) {
                console.log('no hay documentos con ese query');
                return
            }

            setItemList(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));

        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return(
        <>
        <div>
            <h1 className='titulo-h1'>{props.greeting}</h1>
            <ItemList itemList={itemList}/>
        </div>
        </>
    );
}