import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const objetoPrueba =
    {
        image: "https://www.rollerblade.com/files/20178/_1200x1200r_07101300138_TWISTER_EDGE_PHOTO-NEW_PRIMARY_ANGLED_VIEW.jpg",
        title: "TWISTER EDGE",
        price:"80$",
        description: "Twister Edge es un patín urbano altamente versátil y duradero creado para hombres. Una nueva plantilla de transferencia anatómica proporciona un soporte superior con amortiguación adicional y acolchado amortiguador en el talón."
    }


export default function ItemListContainer(props) {
    const [objeto, setLista] = useState([]);
    useEffect( () => {
        const getItems = new Promise((resolve, reject) =>{
    
            if(objetoPrueba != null){
                resolve(objetoPrueba);
            }
            else{
                reject("Error: Lista vacia");
            }
        })
        setTimeout(() => {getItems
            .then( result => setLista(result))
            .catch( error => console.log(error));},2000);
    })

    return <div className ="container">
        <ItemDetail info = {objeto}>

        </ItemDetail>
    </div>
}